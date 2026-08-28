FRANCISCO R. BETON JR. — PORTFOLIO WEBSITE
==========================================

WHAT'S INSIDE
  index.html          the whole site (one page, anchor navigation)
  assets/site.css     all styling
  assets/site.js      menu, scroll reveals, skill bars, contact form
  assets/francis.jpg  your hero photo (optimized, 1050px wide)
  assets/francis-sm.jpg  smaller copy used in the About section
  assets/mark.png     the FB mark, used as logo + favicon
  assets/logo.png     your original full logo (unused, kept for reference)

HOW TO PUT IT ONLINE
  Any static host works. Upload the whole folder as-is.
    - Netlify / Vercel / Cloudflare Pages: drag the folder in. Done.
    - Hostinger / cPanel: upload the contents into public_html.
    - GitHub Pages: push the folder, enable Pages on the branch.
  No build step, no dependencies, no database.

THINGS TO CHANGE BEFORE YOU SHARE IT
  1. SOCIAL LINKS - the LinkedIn and Facebook icons in the Contact
     section point to "#". Put your real profile URLs in.
  2. CONTACT FORM - right now it opens the visitor's email app.
     To make it send by itself, sign up at formspree.io or
     web3forms.com and put their action URL on the <form> tag.
  3. STATS - the 4 numbers under the hero (5+, 2, 4, BS) are pulled
     from your resume. Update them as they change.

SELECTED WORK
  7 real projects, each with a card screenshot and a click-to-open
  full page view:
     Zion Marketing              Cedar City, UT
     Kunzler Consulting          fleet compliance
     Yoder's Top Choice Roofing  Friendship, NY
     Plus Ultra                  Coachella Valley, CA
     Monacco Garage Door         Belmont, MA
     Equinox Garage Door Repair  Seattle, WA
     Zion Marketing (alt)        concept study

  To add another: drop a screenshot into assets/work/ as
  <slug>.jpg (880x550 card crop) and <slug>-full.jpg (820px wide
  full page), then copy any <article class="work__item"> block in
  index.html and change the paths, title and text.

  NOTE: the Kunzler screenshot you sent had the WordPress admin bar
  across the top, including "Howdy, pawerpawer423". I cropped the
  top 32px off so it reads as a live site, not an editor session.
  Worth checking for that on any future screenshot.

WHAT I LEFT OFF ON PURPOSE
  Your resume lists age, height, weight, civil status and the full
  street address (Purok 7, Betinan). That is standard on a Philippine
  resume but it is not something you want public on a portfolio a
  foreign client will read. The site shows "San Miguel, Zamboanga del
  Sur, Philippines" instead. Add the rest back if you want it.

NOTES
  - Your resume says "Brick" under Tools. I wrote "Bricks", which is
    the actual product name. Change it back if you meant something else.
  - Tested for horizontal scroll at every width from 320px to 1600px
    in 10px steps. Clean at all of them.
  - Colors are sampled straight out of your logo file:
      navy  #161F3C   gold  #C99740   slate  #838798
    The page background is darkened to #070B16 / #0B1123.
