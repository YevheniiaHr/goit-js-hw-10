import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_nGz4cJndGaUte8iD6wCWj08gLPKYk0ZJN5YDo6FvY0SQOSVUTZ5VK5RBKZWi1F60";

import Notiflix from 'notiflix';

export function fetchBreeds() {
    return axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!');
        throw error;
      });
  }
  
  export function fetchCatByBreed(breedId) {
    return axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data)
      .catch(error => {
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!');
        throw error;
      });
  }