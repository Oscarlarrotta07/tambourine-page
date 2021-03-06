let interval = null;
(function () {
    class Slider {
        constructor() {
            this.slidesEl = document.querySelectorAll(".slide");
            this.prevSlideEl = document.querySelector(".btn__prev");
            this.nextSlideEl = document.querySelector(".btn__next");
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

        /**
         * Function description, nextSlideAuto change image slider for the next 
         *
         */
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
        /**
         * Function description, nextSlideAuto change image slider for the previous 
         *
         */

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

        /**
         * Function description, setIntervals auto rotate image slider for the next every 8 seconds
         *
         */

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
            this.formInputsEl = document.getElementById("form-inputs")
            this.formsuccesfulEl = document.getElementById("form-succesful")
            this.setMinDeparture = this.setMinDeparture.bind(this);
            this.toggleForm = this.toggleForm.bind(this);
            this.submit = this.submit.bind(this);
            this.minDeparture = 0;
            this.addEvents()
            this.setMinimums()

        }
        /**
        * Function description, setMinimums set min attribute of input date arrival
        *
        */
        setMinimums() {
            this.arrivalEl.setAttribute("min", this.getMinDate());
        }

        /**
        * Function description, submit show thanks message after submit form
        *
        */
        submit() {
            this.formInputsEl.classList.add('displayNone');
            this.formsuccesfulEl.classList.remove('displayNone');
            return false
        }

        /**
         * Function description, setMinimums set min attribute of input date departure
         *
         */
        setMinDeparture() {
            this.departureEl.setAttribute("min", this.arrivalEl.value)
        }


        addEvents() {
            this.btnTabEl.addEventListener('click', this.toggleForm);
            this.btnCloseEl.addEventListener('click', this.toggleForm);
            this.arrivalEl.addEventListener('blur', this.setMinDeparture);
            this.formEl.onsubmit = this.submit;
        }

        /**
         * Function description, toggleForm show and hidden form 
         *
         */
        toggleForm() {
            this.formEl.classList.toggle('show');
            this.bodyEl.classList.toggle('disabledScroll');
        }

        /**
         * Function description, getMinDate get the min date for input arrival 
         *
         */
        getMinDate() {
            let today = new Date();
            let date = today.getDate();
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
