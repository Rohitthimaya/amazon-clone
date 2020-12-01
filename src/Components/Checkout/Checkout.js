import React from 'react'
import "./Checkout.css"
import Subtotal from "../Subtotal/Subtotal.js"
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';


function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/02/SBP/2018/uk_smb_editorial-march_1150x323_1552588743._CB469316442_.jpg" alt="ad" />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {basket.map(item => 
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                    )}
                    
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
