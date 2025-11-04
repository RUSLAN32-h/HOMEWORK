(function() {
    
    document.addEventListener('click', function(e) {
        if ((e.target.closest('.burger-icon') || e.target.closest('.nav__link')) && 
            document.documentElement.clientWidth <= 900) {
            document.body.classList.toggle('body--opened-menu')
        }

        if (e.target.closest('.about__img-button')) {
            document.querySelector('.modal').classList.add('modal--opened')
            document.body.classList.add('body--opened-modal')
        }

        if (e.target.closest('.modal__cancel') || 
            (e.target.closest('.modal') && e.target === e.target.closest('.modal'))) {
            document.querySelector('.modal').classList.remove('modal--opened')
            document.body.classList.remove('body--opened-modal')
        }
    })

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            document.querySelector('.modal').classList.remove('modal--opened')
            document.body.classList.remove('body--opened-modal')
        }
    })

})()