const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let header = document.querySelector('header');
header.style.display = 'flex';

let nav = document.querySelector('nav');
let allNav = document.querySelectorAll('nav a');
allNav[0].textContent = 'Services';
allNav[1].textContent = 'Product';
allNav[2].textContent = 'Vision';
allNav[3].textContent = 'Features';
allNav[4].textContent = 'About';
allNav[5].textContent = 'Contact';
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let newA1 = document.createElement('a');
newA1.textContent = 'Stuff';
nav.prepend(newA1)
let newA2 = document.createElement('a');
newA2.textContent = 'More';
nav.appendChild(newA2)

let color = document.querySelectorAll('a')
color.forEach((element) => element.style.color = 'green');

//let lineBreak = document.createElement('br');

let cta = document.querySelector('.cta')
let ctaText = document.querySelector('.cta-text')
ctaText.style.display = 'flex';
ctaText.style.flexDirection = 'column';
let h1 = document.querySelector('.cta-text h1');
h1.textContent = 'DOM IS AWESOME';
let button = document.querySelector('button');
button.textContent = 'Get Started';
button.style.borderRadius = '5px';
let circleImage = document.querySelector('.cta #cta-img');
circleImage.src = 'img/header-img.png';
circleImage.alt = 'Circle code logo thing';

let mainContent = document.querySelector('.main-content');
mainContent.style.display = 'flex';
mainContent.style.flexDirection = 'column';

let topContent = document.querySelector('.top-content');
topContent.style.display = 'flex';
let textContent1 = document.querySelector('.text-content');
textContent1.style.display = 'flex';
textContent1.style.flexDirection = 'column';
textContent1.style.justifyContent= 'flex-start';
textContent1.style.width = '45%';

let firstH4 = document.querySelector('.top-content .text-content h4');
firstH4.textContent = 'FEATURES';
let p1 = document.querySelector('.text-content p');
p1.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// let textContent2 = document.getElementbyTagName('top-content .text-content .text-content');
// textContent2.style.display = 'flex';
// textContent2.style.flexDirection = 'column';
// textContent2.style.justifyContent= 'flex-start';
// textContent2.style.width = '45%';

// let secondH4 = document.getElementbyTagName('.top-content .text-content .text-content h4');
// secondH4.textContent = 'ABOUT';
// let p2 = document.querySelector('.text-content p');
// p2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


let middleImg = document.querySelector('#middle-img');
middleImg.src = 'img/mid-page-accent.jpg';
middleImg.alt = 'code stuffs';

let contact = document.querySelector('.contact');
contact.style.display = 'flex';
contact.style.flexDirection = 'column';
contact.style.justifyContent = 'flex-start';
let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'CONTACT';
let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = '123 Way 456 Street \n Somewhere, USA';
contactP[1].textContent = '1 (888) 888-8888';
contactP[2].textContent = 'sales@greatidea.io';

let footer = document.querySelector('footer');
footer.style.display = 'flex';
footer.style.justifyContent = 'center';
let footerP = document.querySelector('footer p');
footerP.textContent = 'Copyright Great Idea! 2018';