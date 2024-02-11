import{i,S as l}from"./assets/vendor-5b791d57.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=document.querySelector(".js-search-form"),c=document.querySelector(".gallery");p.addEventListener("submit",s=>{s.preventDefault();const t=s.target.elements.search.value;u(t).then(o=>{o.hits.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"}):f(o.hits)}).catch(o=>{console.error("There was a problem with the fetch operation:",o),i.error({title:"Error",message:"There was a problem with the fetch operation. Please try again later.",position:"topCenter"}),s.target.reset()})});function u(s){const t="https://pixabay.com",o="/api/",e={key:"42305658-75508782eac06a666c1fb928b",image_type:"photo",orientation:"horizontal",safesearch:"true",q:s},r=`${t}${o}?${new URLSearchParams(e)}`;return fetch(r).then(n=>n.json())}function f(s){c.innerHTML="",s.forEach(t=>{const o=`<li class="gallery-item">
  <a class="gallery-link" href="${t.largeImageURL}">
    <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
  </a>
   <div class="image-details">
                    <p>Likes: ${t.likes}</p>
                    <p>Views: ${t.views}</p>
                    <p>Comments: ${t.comments}</p>
                    <p>Downloads: ${t.downloads}</p>
                </div>
</li>`;c.innerHTML+=o})}const m=new l(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});m.refresh();
//# sourceMappingURL=commonHelpers.js.map
