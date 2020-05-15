
# RomCom: An Application for the RomCom Enthusiast

## Pair project during Module 1 at Turing School of Software and Design

## Contributors

 - Jenna Dilullo: https://github.com/jennadilullo8
 - Nicole Latifi: https://github.com/NicoleLatifi

## About

In this project, an application was created where the user could make a RomCom cover with a randomly selected image, title, and descriptors. That cover could then be saved if the user liked it as such. The user could also make their own cover with their own image, title, and descriptors. The user could then save the cover and see it in their saved Rom Coms section. If the user did not like that saved RomCom cover, they then could delete it.

## Learning Goals

 - Write clean, DRY JavaScript to store our data
 - Use a provided class by creating object instances using the new keyword
 - Manipulate the page after it has loaded adding, removing, and updating elements on the DOM
 - Understand event bubbling and use event delegation on dynamic elements
 - Begin to understand how to write effective, clean HTML & CSS
 - Consistently make commits and use proper git flow

## Wins

 - Developing a good understanding of how query selectors and event handlers work together
 - Creating functionality when the user clicks on a button
 - How to properly use the property of classList by adding or removing the class of hidden to certain elements

## Challenges

 - Understanding which html elements we need for the DOM.
 - Solving merge conflicts
 - Making sure we as a team are looking through every aspect of the application for bugs

## Technologies Used

 - HTML
 - CSS
 - JavaScript
 - Git/GitHub

## In Action

### Iteration 0

The gif will show;

- When the page loads, the user should see a cover with a randomized image, title, and two descriptors

<img src="http://g.recordit.co/qaPpFs5QJL.gif" alt="Random Cover display" height=auto width=75%/>

### Iteration 1

The gif will show;

- When the user clicks on the 'Show New Random Cover' button, the page will display a new Rom Com cover

<img src="http://g.recordit.co/wkghwFjKFi.gif" alt="Random Cover display when button is clicked" height=auto width=75

### Iteration 2

The gif will show;

- When a user clicks the 'Make Your Own Cover' button, a couple things should happen:
  - The form should be displayed
  - The home page should be hidden
  - The 'Show New Random Cover' and 'Save Cover' buttons should be hidden
  - The 'Home' button should be displayed

- When a user clicks the 'View Saved Covers' button, a couple things should happen:
  - The saved covers section should be displayed
  - The homepage should be hidden
  - The 'Show New Random Cover' and 'Save Cover' buttons should be hidden
  - The 'Home' button should be displayed

- When a user clicks the 'Home' button, these items should happen to the home button:
  - The Home section should be displayed
  - The home button should be hidden
  - The 'Show New Random Cover' and 'Save Cover' buttons should be displayed
