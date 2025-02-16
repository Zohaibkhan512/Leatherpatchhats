
    /// Nav bar Toggle ///
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('active'); 
      menuToggle.classList.toggle('cross'); // Change to cross icon
    }); 
     // Slick Slider //
    $(document).ready(function () {
        $('.testimonial-slider').slick({
          dots: true,
          infinite: true,
          speed:300,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,    
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      });      
