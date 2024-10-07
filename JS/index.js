const aboutSection = document.getElementById('about');
const image = document.querySelector('.about-img');
const threshold = 0.2;

window.addEventListener('scroll', ()=>{
    const rect = aboutSection.getBoundingClientRect();
    const scrollTop = window.scrollY;
    const sectionMiddle = rect.top + (rect.height / 2);

    if(scrollTop >= sectionMiddle - (window.innerHeight * threshold)){
        image.classList.add('animate');
    }else{
        image.classList.remove('animate');
    }
});

// menu controls
var menuBtn = document.getElementById('menu-open');
var closeBtn = document.getElementById('menu-close');
var menu = document.querySelector('.nav-links');
// show nav-links
menuBtn.addEventListener('click', function(){
    menu.style.display = 'initial';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
});
// hide nav-links
closeBtn.addEventListener('click', ()=>{
    menu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})