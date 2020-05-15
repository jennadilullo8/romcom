var updatedCoverImage = document.querySelector('.cover-image');
var updatedTitle = document.querySelector('.cover-title');
var updatedDescriptorOne = document.querySelector('.tagline-1');
var updatedDescriptorTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

var mainCoverPage = document.querySelector('.home-view');
var formViewPage = document.querySelector('.form-view');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');

// When the Form view is visible, the “Home” button should be visible

var savedCovers = [];

var currentCover;

window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
makeOwnCoverButton.addEventListener('click', viewMakeOwnForm);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function generateRandomCover() {
  var randomCoverImage = covers[getRandomIndex(covers)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomDescriptorOne = descriptors[getRandomIndex(descriptors)];
  var randomDescriptorTwo = descriptors[getRandomIndex(descriptors)];
  updatedCoverImage.src = randomCoverImage;
  updatedTitle.innerText = randomTitle;
  updatedDescriptorOne.innerText = randomDescriptorOne;
  updatedDescriptorTwo.innerText = randomDescriptorTwo;
  currentCover = new Cover(randomCoverImage, randomTitle, randomDescriptorOne, randomDescriptorTwo);
}

function viewMakeOwnForm() {
  formViewPage.classList.remove('hidden');
  mainCoverPage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
}
