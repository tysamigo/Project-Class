# Description
This site is about the rare Isuzu VehiCross. Upon loading the page the site is just a carousel. Mousing over any part of the images pauses the carousel. I changed the "scroll" behavior to "fade" for a better effect. When the user clicks on the "What is it?" element or the Down Arrow then the contents of the page are revealed. 

The NotFound module - I used an image to update this module to better fit the theme of the app.

The Modals in the footer are nonfunctional in this project.<br><br>

## API Calls

API Call #1 (in WhatIsIt module) <br>
Perform a GET call to the API for carousel image names

API Call #2 (in WhatIsIt module) <br>
Iterate over the image names and create a carousel item for each image.  The image is served from the web service API

API Call #3 (in Parts module) <br>
Perform a GET call to the API for parts data

API Call #4 (in Maintenance module) <br>
Perform a GET call to the API for maintenance data

A friend of mine built the API and hosted it on Azure's site (a free trial account used for the purpose of this project) while I created the API calls.  I exported data from a software program that I use (Automotive Wolf) that tracks all information related to the restoration and operation of my VehiCross.  This data was used when building the API on the Azure's website.  The data displayed from the API calls is real factual data.<br><br>

## Custom CSS Classes
.carousel-item > img <br>
This targets all images in the carousel. The values ensure that the images are centered and that the max height of any image is 525px to ensure that the "What is it?" will remain visible even on large viewports.

.navbar .navbar-nav .nav-link <br>
This targets the links in the navbar, overrides the bootstrap styling. It sets the link color to black, increases font weight and padding inbetween.

.navbar .navbar-nav .nav-link:hover <br>
This targets the links in the navbar, overrides the boostrap styling and sets the hover state to red for better visibility.

(html, body) and .container <br>
Ensure the layout is initially set up.

#whatIsIt:hover <br>
This changes the hover state color on the "What is it?" heading.

.fa-chevron-down <br>
This sets the size, padding and color of the down arrow (click to reveal page contents).

#whatIsIt <br>
This changes the cursor into the hand icon upon hover. This makes it easier for the user to understand that this is a clickable feature.

#whatIsIt:hover <br>
This changes the color to red during hover state.

#vx <br>
This targets the id of vx and uses the Isuzu font and creates a text shadow.

.heading <br>
This targets the heading and sets the font to Lilita One. The font stack has fallback fonts to use in the event of a problem with the Lilita One font. The Lilita One font was obtained using google cdn.

.lead::first-letter <br>
This targets only the first letter of the first paragraph (which is using the bootstrap 4 .lead for further styling) and changes the style to the values listed.

footer > div <br>
This changes the background color of the footer to a light gray color.

footer .btn-link <br>
This changes the styling for the footer button link. This button is a Bootstrap 4 class and the button was not inline with the text. It appeared to be out of place. The padding and vertical-align brought the buttons location to back inline.

footer .btn-link:hover <br>
This changes the link to a blue color upon hover. This was to ensure it stands out from the light bray background upon hover.

@font-face <br>
I learned how to upload a font and use the @font-face to be able to use the official Isuzu Font for #vx.<br><br>

## Extra Notes

The carousel was difficult to work with in regards to image placement and display. After doing research I found that others used a photo editor (PIXLR Editor) that allows you to crop images based on a certain aspect ratio. I found that the Bootstrap 4 Carousel (at max vp) is 1200 x 480px. I obtained high res images and then edited them to these specs. Along with adding col-lg class, using CSS to set max height and editing these images, the carousel looks great now in all sizes. I kept the default setting to pause carousel on mouseover. The last image in the carousel is purposely not the same size. I did this to illustrate that my custom css selectors and bootstrap classes can still center and apply appropriate responsive changes to images that are not "prepared" like the other images are. I also doubled the amount of images and added extra indicators to match.

I brought in 2 custom fonts; the Lilita One font and the Isuzu font.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). <br><br>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br>