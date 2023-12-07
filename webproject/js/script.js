
  document.addEventListener('DOMContentLoaded', function () {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth >= 1280) {
      var modal = new bootstrap.Modal(document.getElementById('myModal'));
      modal.show();
    }
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy-load');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);
});

document.addEventListener("DOMContentLoaded", function() {
    const lazyBackgrounds = document.querySelectorAll('.lazy-background');

    const lazyLoad = target => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const url = element.getAttribute('data-background-image');
                    element.style.backgroundImage = `url(${url})`;
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyBackgrounds.forEach(lazyLoad);
});

