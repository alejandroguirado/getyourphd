import { Axios } from "axios";


export const getSearchResults = () => {
    axios.get('http://127.0.0.1:8000/api/posts/')
}