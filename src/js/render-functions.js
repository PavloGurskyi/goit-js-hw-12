import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.js-img-list');
const loaderEl = document.querySelector('.loader');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const lightbox = new SimpleLightbox('.js-img-list a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
        <li class="gallery-item js-item">
          <a href="${largeImageURL}" class="gallery-link">
            <img class="img" src="${webformatURL}" alt="${tags}" width="360" />
            <div class="info-wrapper">
              <div class="img-info">
                <p class="label">Likes</p>
                <p class="value">${likes}</p>
              </div>
              <div class="img-info">
                <p class="label">Views</p>
                <p class="value">${views}</p>
              </div>
              <div class="img-info">
                <p class="label">Comments</p>
                <p class="value">${comments}</p>
              </div>
              <div class="img-info">
                <p class="label">Downloads</p>
                <p class="value">${downloads}</p>
              </div>
            </div>
          </a>
        </li>`;
      }
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtnEl.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtnEl.classList.add('hidden');
}
