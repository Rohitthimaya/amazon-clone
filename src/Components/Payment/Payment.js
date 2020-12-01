import React, { useEffect, useState } from "react";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { Link, useHistory} from "react-router-dom";
import "./Payment.css";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import axios from "axios";
import { db } from "../../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState("")
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    // Generate the special stripe secret which allows us to charge customers
    const getClientSecret = async() => {
      const response = await axios({
        method: 'post',
        // Stripe Expects the total in a currencies sub-units
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [basket])

  // console.log("The secret is >>>", clientSecret)

  const handleSubmit = async(event) => {
    // Do all the fancy stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      // PaymentIntent = Payment Confirmation

      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created
        })

      setSucceeded(true)
      setError(null)
      setProcessing(false)

      dispatch({
        type: 'EMPTY_BASKET'
      })

      history.replace('/orders')
    })

  };

  const handleChange = (event) => {
    // Listen for chages in the cardElement
    // And display any errors as the customers types their card detrails
    setDisabled(event.empty);
    setError(event.error ? event.error.message: "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} Items)</Link>
        </h1>

        {/* Payment Section-Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Dummy Address, (Because this is clone not real Amazon)</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Payment Section-Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Section- Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe Functionality */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total: {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />

                <button disabled={processing || disabled || succeeded}>
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>

                {/* Errors */}
                {error && <div>{error}</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
