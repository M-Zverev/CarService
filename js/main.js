Fancybox.bind("[data-fancybox]", {});

/* Swiper */
const swiper = new Swiper(".swiper", {
    slidesPerView: 2,
    spaceBetween: 48,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: { slidesPerView: 1 },
        1250: { slidesPerView: 2 },
    },
});


/* Filter */
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.blog__btn');
    const posts = document.querySelectorAll('.post');

    function setActiveButton(activeButton) {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        activeButton.classList.add('active');
    }

    function filterPosts(criteria) {
        posts.forEach(post => {
            let shouldShow = false;

            switch (criteria) {
                case 'latest':
                    shouldShow = true;
                    break;
                case 'popular':
                    shouldShow = post.getAttribute('data-popular') === 'true';
                    break;
                case 'favorites':
                    shouldShow = post.getAttribute('data-favorite') === 'true';
                    break;
            }

            post.style.display = shouldShow ? 'block' : 'none';
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterValue = this.getAttribute('data-filter');
            setActiveButton(this);
            filterPosts(filterValue);
        });
    });

    filterPosts('latest');
});

