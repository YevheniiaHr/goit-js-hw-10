import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const notiflixOptions = {
  position: 'left-top',
};

Notiflix.Notify.init(notiflixOptions);
error.style.display = 'none';
catInfo.style.display = 'none';
loader.style.display = 'none';

function populateBreedsSelect(breeds) {
  breedSelect.innerHTML = '';
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function displayCatInfo(catData) {
  catInfo.innerHTML = '';

  catData.map(cat => {
    const catImage = document.createElement('img');
    catImage.src = cat.url;

    const catDescription = document.createElement('p');
    catDescription.textContent = `${cat.breeds[0].description}`;
    const catTemperament = document.createElement('p');
    catTemperament.textContent = `Temperament: ${cat.breeds[0].description}`;

    catInfo.appendChild(catImage);
    catInfo.appendChild(catDescription);
    catInfo.appendChild(catTemperament);
    catInfo.style.display = 'flex';
  });
}

и;
breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;

  loader.style.display = 'block';

  fetchCatByBreed(selectedBreedId)
    .then(catData => {
      displayCatInfo(catData);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      loader.style.display = 'none';
    });
});

fetchBreeds()
  .then(breeds => {
    populateBreedsSelect(breeds);
    new SlimSelect({
      select: '#single',
    });
  })

  .catch(error => {
    console.error(error);
  });
