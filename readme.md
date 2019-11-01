# VehiCross Project

## What is it

Website that allows VehiCross owners to find solutions to most common vehicle problems. 

## Technical Summary

-Bootstrap for UI
-React for UI

## Features

* Troubleshooting Page
    *Should support basic searching
    *Page could lead to Solutions, How-To's and Parts List 
    *Troubleshoot vehicle by:
        *List of Common Problems (top 10 common problems).  If problem not listed, use Search
        *By Category (12 categories listed)
        *Warning Lights
        *Error Codes (OBD II and ABS Codes)
        * ++ Optional, only if I have time.
            If you don't know what is wrong, you can start by symptoms:
            *Feel - I feel it (i.e. hesitation, shimmy, vibration, or a pull)
            *Hear - I hear it (i.e. a rattle, a knock, or a squeal)
            *See - I see it (i.e. oil leak, warning light, or smoke)
            *Smell - I smell it (i.e. gasoline, rotten eggs, or burning oil)
            *Ugh! - It won't start

*How-To's Page
    *Should support basic searching
    *Long Pages, vertical scrolling
    *Likely viewed on mobile while working on vehicle
    *How-To to be listed by:
        * Categories
            *6 Categories total
            *Each category with subcategories
        *Dash Warning Lights
        *OBD II Error Codes
        *TOD/ABS Error Codes
        * Search
            *If not found then "Sorry Message"
            * ++ OPTIONAL, if time allows
                *If not found then add a how-to by using a template.
                *User should be logged to be authorized to submit a template.
                *Requires security (log in and auth)

*Parts List Page
    *Initially use a simple parts list
    *Show Illustrated Parts Diagram
    *Show table with labeled parts
    * ++ OPTIONAL Hover
        *Hover over part number to reveal extra info
        *Extra info includes a replacement part number from a non-factory source along with source info, pricing and tech notes
    *Main Parts List Page is by category (18 categories total)
        *Only the first 5 categories should work initially.
        *All other categories will lead to a "under construction/check back" page until time allows for completion.



## Milestone List

1. Create Troubleshoot Page