const hero = document.querySelector('#hero')


const observer = new IntersectionObserver(
    entries => { entries.forEach(entry => {
        entry.target.classList.toggle("passed", !(entry.isIntersecting));

    });
},{
    threshold: 0.3
})

observer.observe(hero)