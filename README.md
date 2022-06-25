# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Links

- Live Site URL: [The live site](https://tony-508.github.io/interactive-rating-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

I learnt how to use javascript to manipulate the DOM.

```js
let submit = document.getElementById("submit-btn");
let rateSpace = document.getElementById("rate-digit");
let rating = document.querySelectorAll(".rate-btn");

rating.forEach((item) => {
  item.addEventListener("click", function () {
    var text = this.innerText;
    rateSpace.textContent = text;
  });
});

submit.onclick = function () {
  let block1 = document.querySelector("#block-1");
  block1.style.display = "none";
};
```

### Continued development

Learning how to use javascript and its libraries to build good projects.

## Author

- Twitter - [@oluwatoni508](https://twitter.com/oluwatoni508)
