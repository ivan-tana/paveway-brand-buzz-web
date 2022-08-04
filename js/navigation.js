let hero = document.querySelector('.hero-container')
let nav_bar = document.querySelector('.nav-bar')

console.log(hero)

let hero_observer = new IntersectionObserver((entries, hero_observer) =>
{
    entries.forEach(entry => {
        if(!entry.isIntersecting)
        {
            nav_bar.classList.add('scroll')
        }
        else
        {
            nav_bar.classList.remove('scroll')
        }
    });

})

hero_observer.observe(hero)