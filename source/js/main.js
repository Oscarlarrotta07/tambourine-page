let interval = null;
(function () {
    class Slider {
        constructor() {
            this.slidesEl = document.querySelectorAll(".slide");
            this.prevSlideEl = document.querySelector(".btn-prev");
            this.nextSlideEl = document.querySelector(".btn-next");
            this.currentSlide = 0;
            this.maxSlide = this.slidesEl.length - 1;
            this.slidesEl.forEach((slide, index) => {
                slide.style.transform = `translateX(${index * 100}%)`;
            });
            this.intervalTime = 8000;
            this.nextSlideAuto = this.nextSlideAuto.bind(this);
            this.prevSlideAuto = this.prevSlideAuto.bind(this);
            this.addEvents();
            this.setIntervals();
        }

        nextSlideAuto() {
            const self = this;
            if (this.currentSlide === this.maxSlide) {
                this.currentSlide = 0;
            } else {
                this.currentSlide++;
            }
            this.slidesEl.forEach((slide, index) => {
                slide.style.transform = `translateX(${100 * (index - self.currentSlide)}%)`;
            });
        }

        prevSlideAuto() {
            const self = this;
            if (this.currentSlide === 0) {
                this.currentSlide = this.maxSlide;
            } else {
                this.currentSlide--;
            }
            this.slidesEl.forEach((slide, index) => {
                slide.style.transform = `translateX(${100 * (index - self.currentSlide)}%)`;
            });
        }
        addEvents() {
            this.nextSlideEl.addEventListener("click", this.nextSlideAuto);
            this.prevSlideEl.addEventListener("click", this.prevSlideAuto);
        }
        setIntervals() {
            if (interval) {
                clearInterval(interval);
            }
            interval = setInterval(this.nextSlideAuto, this.intervalTime);
        }
    }
    class Form {
        constructor() {
            this.formEl = document.getElementById('form');
            this.btnTabEl = document.getElementById('form-tab');
            this.bodyEl = document.getElementById('body');
            this.btnCloseEl = document.getElementById('form-close');
            this.arrivalEl = document.getElementById("arrival");
            this.departureEl = document.getElementById("departure");
            this.toggleForm = this.toggleForm.bind(this);
            this.addEvents()
            this.setMinimums()

        }

        setMinimums() {
            this.arrivalEl.setAttribute("min", this.getMinDate(0));
            this.departureEl.setAttribute("min", this.getMinDate(1));
        }

        submit() {
            console.log('oscar');
            return false
        }


        addEvents() {
            this.btnTabEl.addEventListener('click', this.toggleForm);
            this.btnCloseEl.addEventListener('click', this.toggleForm);
            this.formEl.onsubmit = this.submit;
        }

        toggleForm() {
            this.formEl.classList.toggle('show');
            this.bodyEl.classList.toggle('disabledScroll');
        }

        getMinDate(days) {
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
            return year + '-' + month + '-' + date;
        }
    }
    const form = new Form()
    const slider = new Slider()
})();
