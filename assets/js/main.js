// SCROLLREVEAL ANIMATION //

const ScrollAnimation = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1900,
    delay: 200,
    // reset: true
})

ScrollAnimation.reveal('.header')
ScrollAnimation.reveal('.text-center, .form-class')
ScrollAnimation.reveal('.btn_submit, .effect', {interval: 300})



