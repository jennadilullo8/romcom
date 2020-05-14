var updatedCoverImage = document.querySelector('.cover-image');
var updatedTitle = document.querySelector('.cover-title');
var updatedDescriptorOne = document.querySelector('.tagline-1');
var updatedDescriptorTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');

var savedCovers = [];

var currentCover;

window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);

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
