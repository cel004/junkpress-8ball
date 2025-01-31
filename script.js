function shake8Ball() {
    const frontBall = document.getElementById('front');
    const blankBall = document.getElementById('blank');
    
    frontBall.style.opacity = 1;
    blankBall.style.animation = 'shake 1s ease-in-out';
    frontBall.style.transition = 'opacity 0.4s';
    frontBall.style.opacity = 0;

    setTimeout(() => {
        blankBall.style.animation = '';
        fadeInRandomImage();
    }, 1000);
}

function fadeInRandomImage() {
    const images = [
        '/assets/answers/HELLYEAH.png',
        '/assets/answers/IGUESS.png',
        '/assets/answers/ITHINKNOT.png',
        '/assets/answers/MAYBE.png',
        '/assets/answers/NO.png',
        '/assets/answers/NOOOOO.png',
        '/assets/answers/ONLYYOUCANKNOWFORSURE.png',
        '/assets/answers/SHAKEAGAIN.png',
        '/assets/answers/UHHHH.png',
        '/assets/answers/WHATTHEHELLSURE.png',
        '/assets/answers/YES.png',
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const frontBall = document.getElementById('front');
    frontBall.src = randomImage;
    frontBall.style.opacity = 0;
    frontBall.style.paddingTop = '0.7rem';
    frontBall.style.width = '25vw';

    setTimeout(() => {
        frontBall.style.transition = 'opacity 1s';
        frontBall.style.opacity = 1;
    }, 100);
}
