# Pokwane Harvest Hope Community Network — PoE Part 1
**Module:** WEDE5020 / WEDE5020 
**Module Name** WEB DEVELOPMENT (INTRODUCTION)
**Student Name:** Masehla lehumo  
**Student ID:** ST10536487

## Project Overview
Pokwane Harvest Hope Community Network is a Non-Profit Organization (NPO) initiative created to address household food insecurity, support smallholder farmers, and establish sustainable agricultural networks across Sekhukhune and Vhembe in Limpopo, South Africa. 

This repository contains the multi page, fully responsive web interface built  with sematic HTML5 and custom external CSS3..
## Part 2 Changelog and Technical Updates
these following changes where implimented transitioning from Part 1 to Part 2 

* **HTML Sematic Structure:** Removed the '<footer>' element from the '<main>' container across all HTML pages to ensure valid document outlines and proper footer layout behaviour.
* **Grid Display Fix:** Added display grid to grid-layout selector.
* **Header Branding Alignment:** Restructured HTML header markup to hold the logo image and brand name.
* **Form Background Contrast:** Fixed fieldset container background colors.
* **Contact media assets:** Updated the primary imagery in the "contact us" page and also added a dedicated office location map asset for the pokwane/sekhukhune regional hub. 

## Responsive web design 
* **Mobile Touch Targets:** Expanded `nav a` padding (`0.75rem 1rem`) within the 600px breakpoint media query for improved touch usability.
* **Typography Scaling:** Implemented fluid typography using `clamp()` rules on `h1` and `h2` headings.
* **Code Documentation:** Added sectioned CSS comments outlining Core Sections across the stylesheet.

Key Technical Features
Semantic HTML5 Architecture: Implements structured sectioning elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<fieldset>`, `<footer>`).
Responsive Web Design (RWD): Uses CSS Grid (`auto-fit`, `minmax`), Flexbox layouts, and `@media` query breakpoints (900px and 600px) for mobile usability.
Custom Properties & Design Tokens: Centralized color palette, font stacks, and box-shadow variables managed inside `:root`.
Accessibility (a11y): Clear focus indicator rings (`outline-offset`), legible typography scaling via `clamp()`, and touch-friendly navigation targets.

## Repository & Folder Structure
text
WEDE5020_PoE_Part1/
 * **index.html**          # Homepage featuring mission overview and impact areas
* **about.html**          # About Us page detailing community history and core values
* **services.html**       # Services & Projects page highlighting agricultural support
 * **enquiry.html**       # Interactive community enquiry and volunteer intake form
* **contact.html**        # Direct contact details and operational hub location

* **css/**
   harveststyle.css    # Central stylesheet with RWD grid and variable rules.  
* **js/**
    main.js        
* **images/**            # Sourced project assets, photographs, and official logo
* **documents/**          # Research papers and proposal documentation

# REFERENCE LIST
Reference List
 * Bootstrap, 2026. Bootstrap v5.3 Documentation. Available at: https://getbootstrap.com/docs/5.3/getting-started/introduction/ (Accessed: 18 September 2026).
 * Harvest SA, 2026. The Original Family Business. Available at: https://www.harvestsa.co.za/2026/04/10/the-original-family-business/ (Accessed: 18 September 2026).
 * Harvest Hope South Africa, 2026. Our Work - Sustainable Agriculture and Community Development. Available at: https://harvesthope.co.za/?page_id=31 (Accessed: 18 September 2026).
 * Home Harvest Network, 2026. Home Harvest Network - Cultivating Community Resilience. Available at: https://www.homeharvestnetwork.co.za/ (Accessed: 18 September 2026).
 * Limpopo Department of Agriculture and Rural Development, 2021. Vhembe District Agricultural Production Drivers Study. Polokwane: Limpopo Provincial Government.
 * SA Harvest, 2026. School Holidays Shouldn't Mean Hunger Campaign. Available at: https://saharvest.org/campaign/school-holidays-shouldnt-mean-hunger/ (Accessed: 18 September 2026).
 * Sekhukhune District Municipality, 2022. Sekhukhune Spatial Development Framework (SDF) Review. Groblersdal: Sekhukhune District Municipality.


