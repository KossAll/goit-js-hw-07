
import { galleryItems } from './gallery-items.js';
// Change code below this line

const allPictures = document.querySelector(`.gallery`);
const cardPictures = createPicturesColection(galleryItems);

allPictures.insertAdjacentHTML(`beforeend`, cardPictures);
allPictures.addEventListener(`click`, onPalletContainerPictures);

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

function onPalletContainerPictures(evt) {
    const isPicturesContainer = evt.target.classList.contains("gallery__image")
    if (!isPicturesContainer) {
    return
    }
 

    
    console.log(evt.target.dataset.source);
} 
