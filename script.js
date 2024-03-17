function mobileMenu() {
                var x = document.getElementById("menu");
                if (x.className === "mobile-menu") {
                    x.className += " responsive";
                } else {
                    x.className = "mobile-menu";
                }
            }

            var slideIndex = 1;
            showSlides(slideIndex);

            function currentSlide(n) {
                showSlides(slideIndex = n);
            }

            function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("banner");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex-1].style.display = "block";
                dots[slideIndex-1].className += " active";
            }
            
            // Auto moving slideshow - consider adding back in with the addition of play, stop buttons 
            /*

            var slideIndexTwo = 0;
            changeSlides();

            function changeSlides() {
                var i;
                var slides = document.getElementsByClassName("banner");
                var dots = document.getElementsByClassName("dot");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                }
                slideIndexTwo++;
                if (slideIndexTwo > slides.length) {
                    slideIndexTwo = 1
                }
                slides[slideIndexTwo-1].style.display = "block";
                dots[slideIndexTwo-1].className += " active";
                setTimeout(changeSlides, 5000);
            } */