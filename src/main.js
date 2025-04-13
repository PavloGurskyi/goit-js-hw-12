import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import './js/scroll-to-up';
import errorIcon from './img/error.svg';

const searchFormEl = document.querySelector('.js-search-form');
const loadMoreBtnEl = document.querySelector('.js-load-more');

let query = '';
let page = 1;
let totalLoadedImages = 0;

searchFormEl.addEventListener('submit', onFormSubmit);
loadMoreBtnEl.addEventListener('click', onLoadMore);

async function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();
  hideLoadMoreButton();

  query = searchFormEl.elements.search_request.value.trim();
  page = 1;
  totalLoadedImages = 0;

  if (query === '') {
    iziToast.show({
      message: 'Please enter your request!',
      position: 'topRight',
    });
    return;
  }

  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.show({
        iconUrl: errorIcon,
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        maxWidth: '432px',
        backgroundColor: '#ef4040',
        theme: 'dark',
        messageColor: '#ffffff',
      });
      return;
    }

    createGallery(data.hits);
    totalLoadedImages += data.hits.length;

    if (totalLoadedImages < data.totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    searchFormEl.reset();
  }
}

async function onLoadMore() {
  page += 1;
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);
    totalLoadedImages += data.hits.length;

    if (totalLoadedImages >= data.totalHits) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    } else {
      showLoadMoreButton();
    }

    smoothScroll();
  } catch (error) {
    iziToast.error({
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const { height: cardHeight } = document
    .querySelector('.gallery-item')
    .getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
