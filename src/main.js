var updatedCoverImage = document.querySelector('.cover-image');
var updatedTitle = document.querySelector('.cover-title');
var updatedDescriptorOne = document.querySelector('.tagline-1');
var updatedDescriptorTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var mainCoverPage = document.querySelector('.home-view');
var formViewPage = document.querySelector('.form-view');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var savedViewPage = document.querySelector('.saved-view');
var inputCoverImage = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var inputDesc1 = document.querySelector('#descriptor1');
var inputDesc2 = document.querySelector('#descriptor2');
var makeMyBookButton = document.querySelector('.create-new-book-button');
var savedCoversSection = document.querySelector('.saved-covers-section');


var savedCovers = [];

var currentCover;

window.addEventListener('load', generateRandomCover);
randomCoverButton.addEventListener('click', generateRandomCover);
makeOwnCoverButton.addEventListener('click', viewMakeOwnForm);
viewSavedButton.addEventListener('click', viewSavedCovers);
homeButton.addEventListener('click', viewHomePage);
makeMyBookButton.addEventListener('click', displayFormSubmissionCover);
saveCoverButton.addEventListener('click', addSavedCover);
savedCoversSection.addEventListener('dblclick', deleteSavedCover);

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
  savedViewPage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  inputCoverImage.value = '';
  inputTitle.value = '';
  inputDesc1.value = '';
  inputDesc2.value = '';
}

function viewSavedCovers() {
  savedCoversSection.innerHTML = '';
  savedViewPage.classList.remove('hidden');
  mainCoverPage.classList.add('hidden');
  formViewPage.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  homeButton.classList.remove('hidden');
  displaySavedCovers();
}

function viewHomePage() {
  mainCoverPage.classList.remove('hidden');
  homeButton.classList.add('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  formViewPage.classList.add('hidden');
  savedViewPage.classList.add('hidden');
}

function displayFormSubmissionCover(event) {
  event.preventDefault();
  updatedCoverImage.src = inputCoverImage.value;
  updatedTitle.innerText = inputTitle.value;
  updatedDescriptorOne.innerText = inputDesc1.value;
  updatedDescriptorTwo.innerText = inputDesc2.value;
  covers.push(inputCoverImage.value);
  titles.push(inputTitle.value);
  descriptors.push(inputDesc1.value, inputDesc2.value);
  currentCover = new Cover(inputCoverImage.value, inputTitle.value, inputDesc1.value, inputDesc2.value);
  formViewPage.classList.add('hidden');
  mainCoverPage.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

function addSavedCover() {
  if (savedCovers.includes(currentCover) != true) {
    savedCovers.push(currentCover);
  }
}

function displaySavedCovers() {
    for (var i = 0; i < savedCovers.length; i++) {
      savedCoversSection.insertAdjacentHTML('afterbegin', `
      <section class='mini-cover' data-id=${savedCovers[i].id}>
      <img class='cover-image' src=${savedCovers[i].cover}>
      <h2 class='cover-title'>${savedCovers[i].title}</h2>
      <h3 class='tagline'>A tale of ${savedCovers[i].tagline1} and ${savedCovers[i].tagline2}</h3>
      <img class="price-tag" src="./assets/price.png">
      <img class="overlay" src="./assets/overlay.png">
      </section> `)
  }
}

function deleteSavedCover(event) {
  var closestCover = event.target.closest('.mini-cover');
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == closestCover.dataset.id) {
      savedCovers.splice(i, 1);
    }
  viewSavedCovers();
  }
}
