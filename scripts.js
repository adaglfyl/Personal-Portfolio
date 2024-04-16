//Page transitions
const transition_el = document.querySelector('.transition');
window.onload = () => {
  setTimeout(() => {
    transition_el.classList.remove('is-active');
  }, 500);
}
//Art Page Functionality
function showArt() {
  const art = document.getElementById("art-page");
  transition_el.classList.add('is-active');
  document.documentElement.style.scrollSnapType = "none";
  setTimeout(() => {
    window.scrollTo(0,0);
    transition_el.classList.remove('is-active');
    art.style.display = "block";
  }, 900);
}
function hideArt() {
  const art = document.getElementById("art-page");
  transition_el.classList.add('is-active');
  document.documentElement.style.scrollSnapType = "y mandatory";
  setTimeout(() => {
    transition_el.classList.remove('is-active');
    art.style.display = "none";
  }, 900);
}
//Lightbox
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const images = document.querySelectorAll('.gallery-image');

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src;
    
    while(lightbox.firstElementChild) {
      lightbox.removeChild(lightbox.firstElementChild);
    }
    lightbox.appendChild(img);
  })
  lightbox.addEventListener('click', e => {
    lightbox.classList.remove('active');
  })
})
//Scroll animations 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));