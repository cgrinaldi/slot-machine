# Crazy Awesome Slot Machine
A slot machine game built using the MVC architecture, jQuery, SASS, Gulp, and Browserify

## Instructions

1. Clone to your local machine
2. Run `npm install`
3. Run `gulp` for developing with live reload
4. Run `gulp build` to produce the minified output in the `build/` directory

## Overview
This is a simple slot machine. The user clicks on the lever and if the stars align (actually the slots...), the user will be presented with a winner modal displaying their prize. 

**Demo**

![slots-demo](https://cloud.githubusercontent.com/assets/4349348/12707731/8bb77c6c-c84c-11e5-841e-ce7868aa215e.gif)

**Winner View**

![winner-modal-small](https://cloud.githubusercontent.com/assets/4349348/12707872/3b2b3692-c84e-11e5-90bc-b5836cb45a0a.jpg)

## Technical Discussion
To structure the application, the Model, View, Controller architecture is used:

- Models
  - Slot Machine Model
  - Slot Model
- Views
  - Slot Machine View
  - Slot View
  - Winner View
  - Stats View
  - Instruction View
- Controller
  - Slot Machine Controller

jQuery is used to handle DOM manipulation, and CSS3 is used for the slot animation effect. SASS is used as a CSS pre-processor, and Browserify is used in conjunction with Gulp to bundle all of the separate Javascript files into a minified bundle.


