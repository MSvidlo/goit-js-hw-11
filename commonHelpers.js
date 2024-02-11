import{S as c,i as n}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.querySelector(".gallery");document.querySelector(".js-search-form");function l(s){getImage.innerHTML="",s.forEach(r=>{const o=`<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${r.likes}</p>
                    <p>Views: ${r.views}</p>
                    <p>Comments: ${r.comments}</p>
                    <p>Downloads: ${r.downloads}</p>
                </div>
</li>`;getImage.innerHTML+=o})}const m=new c(".gallery a",{captionsData:"alt",aptionDelay:250,captionPosition:"bottom"});m.refresh();const u=document.querySelector(".js-search-form");document.querySelector(".gallery");u.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements.search.value;p(r).then(o=>{o.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):l(o.hits)}).catch(o=>{console.error("There was a problem with the fetch operation:",o),n.error({title:"Error",message:"There was a problem with the fetch operation. Please try again later.",position:"topCenter"}),s.target.reset()})});function p(s){const r="https://pixabay.com",o="/api/",e={key:"42305658-75508782eac06a666c1fb928b",image_type:"photo",orientation:"horizontal",safesearch:"true",q:s},t=`${r}${o}?${new URLSearchParams(e)}`;return fetch(t).then(a=>a.json())}
//# sourceMappingURL=commonHelpers.js.map
