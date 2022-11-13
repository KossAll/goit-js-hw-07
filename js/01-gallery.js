
import { galleryItems } from './gallery-items.js';
// Change code below this line

const allPicturesContainer = document.querySelector(`.gallery`);
const cardPictures = createPicturesColection(galleryItems);

allPicturesContainer.insertAdjacentHTML(`beforeend`, cardPictures);
allPicturesContainer.addEventListener(`click`, onPalletContainerPictures);


function createPicturesColection(galleryItems) {
    return galleryItems = galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>
        `
    }).join(``);
};

function createModalWindow(changeImageAdress) {
   window.instance = basicLightbox.create(`
	 <img src="${changeImageAdress} "width="800" height="600"/>
    `, {
       onShow: () => {
           window.addEventListener("keydown", closeModalWindowByEscPress)
       },
      onClose: () => {
        window.removeEventListener("keydown", closeModalWindowByEscPress);
      },
   })
    return instance; 
};

function onPalletContainerPictures(evt) {
    evt.preventDefault();
    const isPicturesContainer = evt.target.classList.contains("gallery__image")
    if (!isPicturesContainer) {
        return
    }
    const originalPictures = evt.target.dataset.source;
    createModalWindow(originalPictures).show();
};

function closeModalWindowByEscPress(evt) {
  const ESC_KEY_CODE = "Escape";
  if (evt.code === ESC_KEY_CODE && instance.visible()) {
    instance.close();
  }
};

