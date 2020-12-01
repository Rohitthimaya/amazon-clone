import axios from "axios"

const instance = axios.create({
    // The API (Cloud function) URL
    baseUrl: 'https://us-central1-clone-b0f4c.cloudfunctions.net/api'
});

export default instance;

// http://localhost:5001/clone-b0f4c/us-central1/api