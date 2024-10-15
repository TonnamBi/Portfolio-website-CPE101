const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_front = document.getElementById('mountains_front');
const text = document.getElementById('text'); 
const btn = document.getElementById('btn'); 
const home = document.querySelector('.home');
const aboutMe = document.querySelector('.about-me');
const education = document.querySelector('.education');
const skill = document.querySelector('.skill')
const contact = document.querySelector('.contact')

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.55 + 'px';
    moon.style.top = value * 1.05 + 'px'; 
    text.style.marginRight = value * 3 + 'px';
    btn.style.marginLeft = value * 2 + 'px';
    
});

home.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollToTop();
});

btn.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(document.getElementById('secAm'));
});

aboutMe.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(document.getElementById('secAm'));
});

education.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(document.getElementById('secEd'));
});

skill.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(document.getElementById('secSk'))
});

contact.addEventListener('click', function(event){
    event.preventDefault();
    smoothScrollTo(document.getElementById('secCt'));
});

function smoothScrollTo(target) {
    if (!target) return;
    const start = window.scrollY;
    const end = target.offsetTop;
    const distance = end - start;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 
        const ease = easeInOutQuad(progress); 
        window.scrollTo(0, start + (distance * ease));
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

function smoothScrollToTop() {
    const start = window.scrollY;
    const distance = -start;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); 
        const ease = easeInOutQuad(progress); 
        window.scrollTo(0, start + (distance * ease));
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
}

function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
