import{i as l,S as c}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function p(s,o){o.innerHTML="",s.forEach(t=>{const n=`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${t.likes}</p>
                    <p>Views: ${t.views}</p>
                    <p>Comments: ${t.comments}</p>
                    <p>Downloads: ${t.downloads}</p>
                </div>
</li>`;o.innerHTML+=n})}const u=document.querySelector(".js-search-form"),f=document.querySelector(".gallery"),a=document.querySelector(".loader");u.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements.search.value;a.style.display="block",d(o).then(t=>{a.style.display="none",t.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):(p(t.hits,f),new c(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"}).refresh())}).catch(t=>{a.style.display="none",l.error({title:"Error",message:"There was a problem with the fetch operation. Please try again later.",position:"topCenter"}),s.target.reset()})});function d(s){const o="https://pixabay.com",t="/api/",e={key:"42305658-75508782eac06a666c1fb928b",image_type:"photo",orientation:"horizontal",safesearch:"true",q:s},r=`${o}${t}?${new URLSearchParams(e)}`;return fetch(r).then(i=>i.json())}
//# sourceMappingURL=commonHelpers.js.map
