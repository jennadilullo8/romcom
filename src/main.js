var updatedCoverImage = document.querySelector('.cover-image');
var updatedTitle = document.querySelector('.cover-title');
var updatedDescriptorOne = document.querySelector('.tagline-1');
var updatedDescriptorTwo = document.querySelector('.tagline-2');


 we should see a cover with a randomly selected image, title, and tagline which includes two random descriptors


var savedCovers = [];

var currentCover;

window.addEventListener('load', generateRandomCover);

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
}
