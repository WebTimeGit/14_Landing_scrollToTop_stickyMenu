document.addEventListener("DOMContentLoaded", () => {

// STICKY HEADER
    let header = document.querySelector('.header')
    let main   = document.querySelector('.main')
    let headerHeight = header.offsetHeight

    function addSticky() {
        if (window.pageYOffset > 0) {
            header.classList.add("sticky")
            main.style.padding = `${headerHeight}px 0 0 0`
        } else {
            header.classList.remove("sticky");
            main.style.padding = `0 0 0 0`
        }
    }

//SCROLL TO TOP
    let toTopBtn = document.querySelector('#scroll_top')
    if (toTopBtn) {
        toTopBtn.addEventListener('click', scroll_top)

        function fadeScroll() {
            if (window.scrollY !== 0) {
                toTopBtn.classList.add('visible')
            } else {
                toTopBtn.classList.remove('visible')
            }
        }

        function scroll_top() {
            document.body.scrollIntoView({block: "start", behavior: "smooth"})
        }
    }

    window.onscroll = function () {
        addSticky();
        fadeScroll()
    };

    // RESET PLACEHOLDER INPUT ON CLICK START
    let form_input = document.querySelectorAll('.remove_placeholder');

    if (form_input) {
        for (let i = 0; i < form_input.length; i++) {
            form_input[i].addEventListener('click', function () {
                let thisElement = this;

                let savePlaceholder = this.getAttribute('placeholder');

                this.setAttribute('placeholder', ' ');
                document.addEventListener('mouseup', function () {
                    thisElement.setAttribute('placeholder', savePlaceholder);
                });
            });
        }
    }


    const swiper = new Swiper('.whyTank_carousel', {
        loop: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        }

    });


});

