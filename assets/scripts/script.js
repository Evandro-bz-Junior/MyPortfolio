var hamburger = document.querySelector(".hamburger");
var mobileNavLinks = document.querySelector(".nav-links");
var navLinks = document.querySelectorAll(".nav-links a");

hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    mobileNavLinks.classList.toggle("active");

    // Adiciona ou remove a classe no-scroll no body
    if (mobileNavLinks.classList.contains('active')) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
});

// Adiciona evento de clique a todos os links do menu
navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Fecha o menu ao clicar no link
        hamburger.classList.remove("is-active");
        mobileNavLinks.classList.remove("active");
        
        // Remove a classe no-scroll no body
        document.body.classList.remove('no-scroll');
    });
});


    var navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            navLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('not-hovered');
                }
            });
        });

        link.addEventListener('mouseout', () => {
            navLinks.forEach(otherLink => {
                otherLink.classList.remove('not-hovered');
            });
        });
    });

    const mapLinks = document.querySelectorAll('.map-links a');

    mapLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            mapLinks.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.classList.add('not-hovered');
                }
            });
        });

        link.addEventListener('mouseout', () => {
            mapLinks.forEach(otherLink => {
                otherLink.classList.remove('not-hovered');
            });
        });
    });


    //
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px', // Reduz a distância
    duration: 2000, // Reduz a duração
    delay: 300, // Reduz o atraso
    //reset: true //animation repeat
})
 

sr.reveal(`.nav-item, .contact-header`)

sr.reveal(`.projects-section .header, .contact`,{origin:'bottom'})
sr.reveal(`.content-area, .about-img-area, footer`,{origin:'left',interval: 200})
sr.reveal(`.links-area, .about-content-area, .project-card`,{origin:'right',interval: 200})
sr.reveal(`.nav-link`,{interval: 200,delay:200})

