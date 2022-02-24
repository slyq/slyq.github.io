one = document.getElementsByClassName('one')[0]
overlay = document.getElementsByClassName('overlay')[0]
overnav = document.getElementById('over-nav')
logo = document.getElementsByClassName('logo')[0]
text = document.getElementsByClassName('text')[0]
navB = document.getElementById('navbar-button')
navR = document.getElementById('navbar-right')
one_scale = new chroma.scale(['#877', '#151515']).mode('lab');

window.addEventListener('scroll', function(e) {
    window.requestAnimationFrame(function() {
        one.style.backgroundColor = one_scale(window.pageYOffset / one.clientHeight).hex();
        if (window.pageYOffset < 30) {
            // centered box

            overlay.style.width = '60vmin';
            overlay.style.maxWidth = '500px';
            overlay.style.top = '30vh';
            overlay.style.left = '30vw';

            overlay.style.backgroundColor = 'rgba(69, 69, 69, 0.5)';

            logo.style.width = '50vmin';
            logo.style.maxWidth = '500px';
            logo.style.height = '10vmin';
            logo.style.filter = 'none';
            // logo.style.padding = '15px';
            logo.style.float = 'center';
            text.innerHTML = '<h1>Clement Chan</h1>';
            text.style.opacity = '1';

            navB.style.visibility = 'hidden';
            navB.style.width = '0';
            navB.style.height = '0';

            navR.style.visibility = 'hidden';
            navR.style.width = '0';
            navR.style.height = '0';
        }
        else {
            // navbar

            overlay.style.width = '100%';
            overlay.style.maxWidth = 'none';
            overlay.style.top = '0';
            overlay.style.left = '0';

            overlay.style.backgroundColor = 'rgba(69, 69, 69, 1)';

            logo.style.width = '30vmin';
            logo.style.height = '6vmin';
            logo.style.maxWidth = '300px';
            logo.style.filter = 'saturate(300%)';
            logo.style.float = 'left';
            text.innerHTML = '';
            text.style.opacity = '0';

            navB.style.visibility = 'visible';
            navB.style.width = 'auto';
            navB.style.height = 'auto';

            navR.style.visibility = 'visible';
            navR.style.width = 'auto';
            navR.style.height = 'auto';
        }
    });
});