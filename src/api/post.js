import axios from "axios";

export default axios.create(({
    baseURL: "http://localhost:3500/" 
    // will use port of database
}))