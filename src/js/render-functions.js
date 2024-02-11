

// import { itemTemplate } from './render-functions';
// // Описаний у документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";


// const getGallery = document.querySelector('.gallery');
// const getForm = document.querySelector(".js-search-form");


// // створення функції що створює розмітку для картки 
// export function itemTemplate(images) {
//     getImage.innerHTML = '';
//       images.forEach(image => {
//         const card =
//             `<li class="gallery-item">
//   <a class="gallery-link" href="${largeImageURL}">
//     <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
//   </a>
//    <div class="image-details">
//                     <p>Likes: ${image.likes}</p>
//                     <p>Views: ${image.views}</p>
//                     <p>Comments: ${image.comments}</p>
//                     <p>Downloads: ${image.downloads}</p>
//                 </div>
// </li>`;
//         getImage.innerHTML += card;
//     })
// }
    


// const lightbox = new SimpleLightbox(".gallery a", { captionsData: "alt", aptionDelay: 250, captionPosition: 'bottom' });
// lightbox.refresh();

//  function displayImages(image) {
//         return `<ul class='gallery'><li class="gallery-item">
//     <img class="gallery-image" src="${image.previewURL}" alt="#"/></li></ul>`
    
//     };
//     function renderImage(data) {
//         const markup = data.map(displayImages).join('');

//         getImage.innerHTML = `<ul class='gallery'>${markup}</ul>`
        
// };
