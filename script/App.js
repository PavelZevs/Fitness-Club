document.getElementById('burger').addEventListener('click', function () {
    document.querySelector('.nav__link').classList.toggle('show');
});

const homeLink = document.querySelector('nav ul li:nth-child(1) a');
const page1Link = document.querySelector('nav ul li:nth-child(2) a');
const page2Link = document.querySelector('nav ul li:nth-child(3) a');
const page3Link = document.querySelector('nav ul li:nth-child(4) a');

homeLink.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'index.html';
});
page1Link.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'About.html';
});
page2Link.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'Contact.html';
});
page3Link.addEventListener('click', function(event){
    event.preventDefault();
    window.location.href = 'Our_team.html';
});