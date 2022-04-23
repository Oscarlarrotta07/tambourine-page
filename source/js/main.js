(function () {

    const slides = document.querySelectorAll(".slide");
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${index * 100}%)`;
    });
    const nextSlide = document.querySelector(".btn-next");
    let currentSlide = 0;
    let maxSlide = slides.length - 1;

    nextSlide.addEventListener("click", function () {
        if (currentSlide === maxSlide) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    });

    const prevSlide = document.querySelector(".btn-prev");
    prevSlide.addEventListener("click", function () {
        nextSlideAuto();
    });

    function nextSlideAuto() {
        if (currentSlide === maxSlide) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }

        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
        });
    }

    setInterval(nextSlideAuto, 8000);

    //form
    const form = document.getElementById('form');
    const btnTab = document.getElementById('form-tab');
    const body = document.getElementById('body');
    const btnClose = document.getElementById('form-close');

    btnTab.addEventListener('click', () => {
        toggleForm();
    });

    btnClose.addEventListener('click', () => {
        toggleForm();

    });

    function toggleForm() {
        form.classList.toggle('show');
        body.classList.toggle('disabledScroll');
    }

    function getMinDate(days) {
        let today = new Date();
        let date = today.getDate() + days;
        let month = today.getMonth() + 1;
        const year = today.getFullYear();

        if (date < 10) {
            date = '0' + date
        }

        if (month < 10) {
            month = '0' + month
        }

        today = year + '-' + month + '-' + date;

        return today
    }

    document.getElementById("arrival").setAttribute("min", getMinDate(0));
    document.getElementById("departure").setAttribute("min", getMinDate(1));

    // submit form    
    form.onsubmit = submit;
    function submit() {
        console.log('oscar');
        return false
    }


})();



