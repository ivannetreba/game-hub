import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd41a6d62b63d421a81b98bf5fc97c24b'
  }
})