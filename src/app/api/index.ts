import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://65ccec2ddd519126b83fd087.mockapi.io/pizzas',
  });

  export const instanceForJSONPlaceholder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/posts',
    headers:{
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

