# VehiCross Project

## What is it

Website that allows VehiCross owners to find solutions to most common vehicle problems. 

## Technical Summary

* Bootstrap for UI
* React for UI

## Features

* Troubleshooting Page
    * Should support basic searching
    * Page could lead to Solutions, How-To's and Parts List 
    * Troubleshoot vehicle by:
        * List of Common Problems (top 10 common problems).  If problem not listed, use Search
        * By Category (12 categories listed with many subcategories)
        * Warning Lights
        * Error Codes (OBD II and ABS Codes)
        * ++ Optional, only if I have time.
            If you don't know what is wrong, you can start by symptoms:
            * Feel - I feel it (i.e. hesitation, shimmy, vibration, or a pull)
            * Hear - I hear it (i.e. a rattle, a knock, or a squeal)
            * See - I see it (i.e. oil leak, warning light, or smoke)
            * Smell - I smell it (i.e. gasoline, rotten eggs, or burning oil)
            * Ugh! - It won't start
* How-To's Page
    * Should support basic searching
    * Long Pages, vertical scrolling
    * Likely viewed on mobile while working on vehicle
    * How-To to be listed by:
        * Categories
            * 6 Categories total
            * Each category with subcategories
        * Dash Warning Lights
        * OBD II Error Codes
        * TOD/ABS Error Codes
        * Search
            * If not found then "Sorry Message"
            * ++ OPTIONAL, if time allows
                * If not found then add a how-to by using a template.
                * User should be logged to be authorized to submit a template.
                * Requires security (log in and auth)
* Parts List Page
    - Note: IPL = Illustrated Parts List
    * Initially use a simple parts list
    * Show Parts Diagram w/IPL Numbers
    * Show table with labeled parts.  Table fields for Parts List include:
        * Name
        * Isuzu Part Number
        * IPL Number
        * Description (includes technical notes)
        * Replacement (Non-OEM Replacement Options)
    * ++ OPTIONAL Hover
        * Hover over part number to reveal extra info
        * Extra info includes a replacement part number from a non-factory source along with source info, pricing and tech notes
    * Main Parts List Page is by category (18 categories total)
        * Only the first 5 categories should work initially.
        * All other categories will lead to a "under construction/check back" page until time allows for completion.



## Milestone List

* Week 1
- Create Main Category Page
- List all Categories

* Category Page
- List Problems for Categories


* Week 2
- Learn J.S. Objects
- Create list of problems for each category


* Week 3
- Make Problem Page
- List Problems & Solutions

* Week 4
- Upgrade U.I.
- Add searching
- Add more problems to look at