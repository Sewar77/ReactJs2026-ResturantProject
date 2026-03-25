import axios from "axios";

const api = axios.create({
    baseURL: "https://fakestoreapi.com" //fake api from internet
    //baseURL:"https://localhost:3000/api" ==> we create the api 
})

export default api