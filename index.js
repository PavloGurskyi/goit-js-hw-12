import{a as q,S as E,i as n}from"./assets/vendor-lWlncEKX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const B="https://pixabay.com/api/",M="48238539-5c4f953a21d3e608577efa510";async function f(t,s=1){var r;const a=new URLSearchParams({key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s});try{return(await q.get(`${B}?${a}`)).data}catch(e){throw new Error(((r=e.response)==null?void 0:r.status)||e.message)}}const p=document.querySelector(".js-img-list"),g=document.querySelector(".loader"),y=document.querySelector(".js-load-more"),$=new E(".js-img-list a",{captionsData:"alt",captionDelay:250});function C(t){const s=t.map(({webformatURL:a,largeImageURL:r,tags:e,likes:o,views:i,comments:b,downloads:S})=>`
        <li class="gallery-item js-item">
          <a href="${r}" class="gallery-link">
            <img class="img" src="${a}" alt="${e}" width="360" />
            <div class="info-wrapper">
              <div class="img-info">
                <p class="label">Likes</p>
                <p class="value">${o}</p>
              </div>
              <div class="img-info">
                <p class="label">Views</p>
                <p class="value">${i}</p>
              </div>
              <div class="img-info">
                <p class="label">Comments</p>
                <p class="value">${b}</p>
              </div>
              <div class="img-info">
                <p class="label">Downloads</p>
                <p class="value">${S}</p>
              </div>
            </div>
          </a>
        </li>`).join("");p.insertAdjacentHTML("beforeend",s),$.refresh()}function j(){p.innerHTML=""}function L(){g.classList.remove("hidden")}function w(){g.classList.add("hidden")}function v(){y.classList.remove("hidden")}function d(){y.classList.add("hidden")}const h=document.querySelector(".js-arrow");window.addEventListener("scroll",()=>{window.scrollY>500?h.classList.add("is-shown"):h.classList.remove("is-shown")});const x="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.969%206.96912C7.03867%206.89927%207.12143%206.84386%207.21255%206.80605C7.30366%206.76824%207.40135%206.74878%207.5%206.74878C7.59865%206.74878%207.69633%206.76824%207.78745%206.80605C7.87857%206.84386%207.96133%206.89927%208.031%206.96912L12%2010.9396L15.969%206.96912C16.0387%206.89939%2016.1215%206.84407%2016.2126%206.80633C16.3037%206.7686%2016.4014%206.74917%2016.5%206.74917C16.5986%206.74917%2016.6963%206.7686%2016.7874%206.80633C16.8785%206.84407%2016.9613%206.89939%2017.031%206.96912C17.1007%207.03885%2017.156%207.12164%2017.1938%207.21274C17.2315%207.30385%2017.2509%207.4015%2017.2509%207.50012C17.2509%207.59874%2017.2315%207.69639%2017.1938%207.7875C17.156%207.8786%2017.1007%207.96139%2017.031%208.03112L13.0605%2012.0001L17.031%2015.9691C17.1007%2016.0389%2017.156%2016.1216%2017.1938%2016.2127C17.2315%2016.3039%2017.2509%2016.4015%2017.2509%2016.5001C17.2509%2016.5987%2017.2315%2016.6964%2017.1938%2016.7875C17.156%2016.8786%2017.1007%2016.9614%2017.031%2017.0311C16.9613%2017.1009%2016.8785%2017.1562%2016.7874%2017.1939C16.6963%2017.2316%2016.5986%2017.2511%2016.5%2017.2511C16.4014%2017.2511%2016.3037%2017.2316%2016.2126%2017.1939C16.1215%2017.1562%2016.0387%2017.1009%2015.969%2017.0311L12%2013.0606L8.031%2017.0311C7.96127%2017.1009%207.87848%2017.1562%207.78737%2017.1939C7.69626%2017.2316%207.59861%2017.2511%207.5%2017.2511C7.40138%2017.2511%207.30373%2017.2316%207.21262%2017.1939C7.12151%2017.1562%207.03873%2017.1009%206.969%2017.0311C6.89927%2016.9614%206.84395%2016.8786%206.80621%2016.7875C6.76847%2016.6964%206.74905%2016.5987%206.74905%2016.5001C6.74905%2016.4015%206.76847%2016.3039%206.80621%2016.2127C6.84395%2016.1216%206.89927%2016.0389%206.969%2015.9691L10.9395%2012.0001L6.969%208.03112C6.89915%207.96145%206.84374%207.87869%206.80593%207.78757C6.76812%207.69645%206.74866%207.59877%206.74866%207.50012C6.74866%207.40147%206.76812%207.30379%206.80593%207.21267C6.84374%207.12155%206.89915%207.03879%206.969%206.96912Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e",m=document.querySelector(".js-search-form"),F=document.querySelector(".js-load-more");let c="",u=1,l=0;m.addEventListener("submit",P);F.addEventListener("click",A);async function P(t){if(t.preventDefault(),j(),d(),c=m.elements.search_request.value.trim(),u=1,l=0,c===""){n.show({message:"Please enter your request!",position:"topRight"});return}L();try{const s=await f(c,u);if(s.hits.length===0){n.show({iconUrl:x,message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",maxWidth:"432px",backgroundColor:"#ef4040",theme:"dark",messageColor:"#ffffff"});return}C(s.hits),l+=s.hits.length,l<s.totalHits?v():d()}catch(s){n.error({message:s.message,position:"topRight"})}finally{w(),m.reset()}}async function A(){u+=1,L(),d();try{const t=await f(c,u);C(t.hits),l+=t.hits.length,l>=t.totalHits?(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):v(),H()}catch(t){n.error({message:t.message,position:"topRight"})}finally{w()}}function H(){const{height:t}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
