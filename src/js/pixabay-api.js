// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const listOfParams = {
    key:'42305658-75508782eac06a666c1fb928b',
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    
}
function getPostsByUser(userValue) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = '/api/';
    const params = `?q=${userValue}`;

    const url = BASE_URL + END_POINT + params;
    const OPTIONS = {
        headers: {
            "X-RateLimit-Limit": 'The maximum number of requests that the consumer is permitted to make in 30 minutes.',
        "X-RateLimit-Remaining": 'The number of requests remaining in the current rate limit window.',
         " X-RateLimit-Reset": 'The remaining time in seconds after which the current rate limit window resets.',
        }
    }
}