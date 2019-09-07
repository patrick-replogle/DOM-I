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
//Header and nav

//nav section
let allA = document.querySelectorAll('a');
allA[0].textContent = siteContent['nav']["nav-item-1"];
allA[1].textContent = siteContent['nav']["nav-item-2"];
allA[2].textContent = siteContent['nav']["nav-item-3"];
allA[3].textContent = siteContent['nav']["nav-item-4"];
allA[4].textContent = siteContent['nav']["nav-item-5"];
allA[5].textContent = siteContent['nav']["nav-item-6"];
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//color function
let aColor = allA.forEach((element) => element.style.color = 'green');
//add a tags
let nav = document.querySelector('nav');
let newA1 = document.createElement('a');
newA1.textContent = "Stuff";
newA1.style.color = 'green';
nav.appendChild(newA1);

let newA2 = document.createElement('a');
newA2.textContent = "More";
newA2.style.color = 'green';
nav.prepend(newA2);

//cta section and line breaks hard coded
let cta = document.querySelector('.cta')
let ctaText = document.querySelector('.cta-text')
let h1 = document.querySelector('.cta-text h1');
h1.textContent = 'DOM \n IS \n AWESOME';
h1.style.whiteSpace = 'pre';
let button = document.querySelector('button');
button.style.borderRadius = '5px';
button.textContent = siteContent["cta"]["button"];
let circleImg = document.getElementById("cta-img");
circleImg.setAttribute('src', siteContent['cta']['img-src']);

//middle img
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//all h4 and p tags for main-content
let allH4 = document.querySelectorAll('h4');
allH4[0].textContent = siteContent['main-content']["features-h4"];
allH4[1].textContent = siteContent['main-content']["about-h4"];
allH4[2].textContent = siteContent['main-content']["services-h4"];
allH4[3].textContent = siteContent['main-content']["product-h4"];
allH4[4].textContent = siteContent['main-content']["vision-h4"];
allH4[5].textContent = siteContent['contact']["contact-h4"];

let allP = document.querySelectorAll('p');
allP[0].textContent = siteContent['main-content']["features-content"];
allP[1].textContent = siteContent['main-content']["about-content"];
allP[2].textContent = siteContent['main-content']["services-content"];
allP[3].textContent = siteContent['main-content']["product-content"];
allP[4].textContent = siteContent['main-content']["vision-content"];
allP[8].textContent = siteContent['footer']["copyright" ];

//contact info to get line breaks
let contactP = document.querySelector('.contact p');
contactP.textContent = '123 Way 456\nStreet Somewhere, USA\n \n1 (888) 888-8888\n \nsales@greatidea.io'
contactP.style.whiteSpace = 'pre';
