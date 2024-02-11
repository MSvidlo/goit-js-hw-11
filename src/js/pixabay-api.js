// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const searchForm = document.querySelector('.js-search-form');
const getImage = document.querySelector(".gallery");



searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    getPostsByUser(query)
        .then(data => {
            if (data.hits.length === 0) {
                // Показати повідомлення про відсутність зображень
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topCenter'
                });
            }
            else {
                // Обробити отримані дані зображень
                itemTemplate(data.hits);
            }
        })
        .catch(error => {
            // Обробити помилку запиту
            console.error('There was a problem with the fetch operation:', error);
            // Показати повідомлення про помилку
            iziToast.error({
                title: 'Error',
                message: 'There was a problem with the fetch operation. Please try again later.',
                position: 'topCenter'
            });
            e.target.reset();
        });
});

 
function getPostsByUser(query) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = '/api/';
    const API_KEY = '42305658-75508782eac06a666c1fb928b';

    const params = {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        q: query
    
    };


    const url = `${BASE_URL}${END_POINT}?${new URLSearchParams(params)}`;

    

   return fetch(url).then(res => res.json());
    };

   function itemTemplate(images) {
    getImage.innerHTML = '';
      images.forEach(image => {
        const card =
            `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                </div>
</li>`;
        getImage.innerHTML += card;
    })
}
    

const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", captionDelay: 250, captionPosition: 'bottom' });
lightbox.refresh();