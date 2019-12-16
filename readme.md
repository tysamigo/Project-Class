# VehiCross Project

## What is it

Website that allows Isuzu VehiCross owners to find solutions to most common vehicle problems. 

## Technical Summary

* Bootstrap for UI
* React for UI

* Due to the lack of time and knowledge of a back-end language we decided that I would hard-code "keys" and use props.  The next step is to learn Express and SQL to make the site the correct way.  For now, however, I focused everything on the front end, content, styling and fixing known React problems such as using the scroll.to function.

## Features

* Home
    *Initial load presents a carousel.  Mousing over any part of the images pauses the carousel. 

* Nav
    *Responsive & styled w/CSS 
    *Used NavToggle to fix viewport issues with smaller sizes

* Footer
    *Two working modals (front side only)

* Troubleshooting
    *Responsive 3-way stepper.  Modified so that you cannot skip forward past step 2.  You can skip backwards, but not forward.
    *List of Main Categories of problems to choose from
    *List of Sub Categories of problems to choose from
    *List of Solutions (using Cards)
    *Solutions link to new component for a full description of solution including:
        *Brief description of problem & solution
        *List of tools needed
        *Parts Info
        *Step by step how-to instructions

    *Note: All main categories and all sub categories work and will render unique content.  Each problem has a solution (ie problem #1 has a solution #1, problem #2 has a solution #2).  
    
    To view what a completed solution looks like, click on Brakes, then Brakes Grinding and then either solution.  Both Front and Rear Brake Solutions work and render unique components.  All solutions would render this type of info.


* Maintenance
    *List of most common maintenance procedures (using Cards)
    *Links are currently inactive however the concept is the same as the Brake Solutions.  Each component would render a step by step how-to.


* Parts List Page
    *List of Main Categories for parts
    *Links/Routes are currently inactive however the concept is the same as the Troubleshooting section.  Each section would have a subsection (or 2) eventually resulting in an Isuzu Illustrated Parts List Diagram.

* NotFound module - I used an image to update this module to better fit the theme of the app.



## Milestone List

## Week 1
- Create Main Category Page
- List all Categories
- Category Component
- List Problems for Categories


## Week 2
- Learn J.S. Objects
- Create list of problems for each category


## Week 3
- Make Problem Component
- List Problems & Solutions

## Week 4
- Upgrade U.I.
- Add more problems to look at