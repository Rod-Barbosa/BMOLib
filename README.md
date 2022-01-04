# BMO Frontend Assignment - (Open Lib - API)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

The task is to create an application that accepts a title as a parameter. The application should then return book results, and for each book should display the following information:
- Title
- Book Cover
- Author
- Published Date
The application should also have the ability to:
- Sort results alphabetically by title
- Sort results by more recently published
- Any other functionality you feel will make this app a better experience

### Screenshot
<img src="./start.png"/>
<img src="./searchUp.png" width="30%" height="30%" />
<img src="./searchDown.png" width="30%" height="30%" />
![](./searchDownMid.png)
![](./searchDownEnd.png)
![](./550Date.png)
![](./800Date.png)

### Links

- Solution Github URL: [https://github.com/Rod-Barbosa/momentumClone](https://github.com/Rod-Barbosa/momentumClone)
- Live Site URL: no live site for chrome extension, jsut download the repo and install on your browser

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JavaScript
- Chrome Dev Tools

### What I learned

This makes the background walways pretty
```css
body {
    background: no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
```

Making letters easier to read on a picture background
```css
{
    text-shadow: 0px 0px 20px #aaaaaa;
    text-shadow: 1px 1px 2px #474747;
}
```

To work with view hight without running into margins forcing scrolling
```css
* {
    box-sizing: border-box;
}  
```

### Continued development

This could go 1000 different directions, but just adding stuff to the screen seems counter productive to a tab extension that is supposed to free your mind from being bombarded by too much information

### Useful resources

- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#getting_the_current_position) - Specially cool to use the lon and lat params
- [Javascript Clock Updated every second](https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript) - setInterval(function, 1000) saves the day once again
- [Crypto API](https://www.coingecko.com/en/api/documentation) - Coingecko seems overloaded and slow, but it gets the job done

## Author

- Website - [Rodrigo Portfolio](https://www.gelatodigital.com)
- Frontend Mentor - [@Rod-Barbosa](https://www.frontendmentor.io/profile/Rod-Barbosa)
- Github - [@Rod-Barbosa](https://github.com/Rod-Barbosa)

## Acknowledgments

