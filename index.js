document.addEventListener('DOMContentLoaded', () => {
    const hiddenBall = document.getElementById('hidden-ball')
    const purpleBall = document.getElementById('purple-ball');
    const redBall = document.getElementById('red-ball');
    const orangeBall = document.getElementById('orange-ball');
    const greenBall = document.getElementById('green-ball');
    const blueBall = document.getElementById('blue-ball');
    const yellowBall = document.getElementById('yellow-ball');
  
    const purpleScale = 0.30;
    const redScale = 1.15;
    const orangeScale = 2.25;
    const greenOffset = -140;
    const blueOffsetX = 30;
    const blueOffsetY = 75;
    const blueScale = 0.85;
    const yellowOffsetY = 65;
  
    hiddenBall.addEventListener('mouseover', () => {
      moveBall(purpleBall, -purpleBall.offsetWidth / -1.85, purpleBall.offsetHeight / -6, purpleScale);
      moveBall(redBall, redBall.offsetWidth / 2.25, redBall.offsetHeight / 1.35, redScale);
      moveBall(orangeBall, -orangeBall.offsetWidth / 1, -orangeBall.offsetHeight / 0.75, orangeScale);
      orangeBall.style.zIndex = `0`;
      moveBall(greenBall, greenOffset, -30, 2.35);
      moveBall(blueBall, blueOffsetX, -blueOffsetY, blueScale);
      moveBall(yellowBall, -35, yellowOffsetY, 0.6);
    });
  
    hiddenBall.addEventListener('mouseout', () => {
      moveBall(purpleBall, 0, 0, 1);
      moveBall(redBall, 0, 0, 1);
      moveBall(orangeBall, 0, 0, 1);
      orangeBall.style.zIndex = `2`;
      moveBall(greenBall, 0, 0, 1);
      moveBall(blueBall, 0, 0, 1);
      moveBall(yellowBall, 0, 0, 1);
    });
  
    function moveBall(ball, offsetX, offsetY, scale) {
      ball.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const purpleBall = document.querySelector('#purple-ball');
    const topNavItems = document.querySelectorAll('.top-nav-item');
    const readBio = document.querySelector('.read-my-bio');
    const hiddenBall = document.querySelector('#hidden-ball');
    const aboutText = document.querySelector('.about-text');
    const takeHome = document.querySelector('.take-home');
    const blueBall = document.querySelector('#blue-ball');
    const orangeBall = document.querySelector('#orange-ball');
    const yellowBall = document.querySelector('#yellow-ball');
    const greenBall = document.querySelector('#green-ball');
    const redBall = document.querySelector('#red-ball');
    const aboutOrbGreen = document.querySelector('#about-orb-green');
    const aboutOrbOrange = document.querySelector('#about-orb-orange');
    const aboutOrbYellow = document.querySelector('#about-orb-yellow');
    const workOrbOrange = document.querySelector('#work-orb-orange');
    const takeHomeWork = document.querySelector('#work-orb-orange');


    topNavItems[1].addEventListener('click', expandPurpleBall);
    readBio.addEventListener('click', expandPurpleBall);
    takeHome.addEventListener('click', revertPurpleBall);

    topNavItems[2].addEventListener('click', expandYellowBall);
    takeHomeWork.addEventListener('click', revertOrangeBall);


    function expandYellowBall() {
        yellowBall.style.transform = 'scale(15)';
        yellowBall.style.transition = 'transform 900ms ease';
        yellowBall.style.zIndex = '4';
        setTimeout(() => {
            workOrbOrange.style.transition = 'opacity 700ms ease';
            workOrbOrange.style.opacity = '1';
            workOrbOrange.style.animation = 'floatAnimation 3.5s infinite';
            workOrbOrange.style.top = '66%';
        }, 700);
    }

    function expandPurpleBall() {
        purpleBall.style.transform = 'scale(6)';
        purpleBall.style.transition = 'transform 900ms ease';
        purpleBall.style.zIndex = '4';
        hiddenBall.style.display = 'block';
        changeTopNav();

        setTimeout(() => {
            aboutText.style.visibility = 'visible';
            aboutText.style.transition = 'opacity 1700ms ease';
            aboutText.style.opacity = '1';
            blueBall.style.visibility = 'hidden';
            blueBall.style.transition = 'opacity 500ms ease';
            blueBall.style.opacity = '0';
            orangeBall.style.visibility = 'hidden';
            orangeBall.style.transition = 'opacity 500ms ease';
            orangeBall.style.opacity = '0';
            yellowBall.style.visibility = 'hidden';
            yellowBall.style.transition = 'opacity 500ms ease';
            yellowBall.style.opacity = '0';
            greenBall.style.visibility = 'hidden';
            greenBall.style.transition = 'opacity 500ms ease';
            greenBall.style.opacity = '0';
            redBall.style.visibility = 'hidden';
            redBall.style.transition = 'opacity 500ms ease';
            redBall.style.opacity = '0';
            setTimeout(() => {
                aboutOrbGreen.style.transition = 'opacity 700ms ease';
                aboutOrbGreen.style.opacity = '1';
                aboutOrbGreen.style.animation = 'floatAnimation 3.5s infinite';
                aboutOrbGreen.style.top = '50%';
                aboutOrbOrange.style.transition = 'opacity 2100ms ease';
                aboutOrbOrange.style.opacity = '1';
                aboutOrbOrange.style.animation = 'floatAnimation 4s infinite';
                aboutOrbOrange.style.top = '47%';
                aboutOrbYellow.style.transition = 'opacity 3000ms ease';
                aboutOrbYellow.style.opacity = '1';
                aboutOrbYellow.style.animation = 'floatAnimation 3s infinite';
                aboutOrbYellow.style.top = '60%';
                //
            }, 700);
        }, 700);
    }

    function changeTopNav() {
        topNavItems.forEach(item => {
        item.style.color = '#ffffff';
        });
    }

    function moveBall(ball, offsetX, offsetY, scale) {
        ball.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scale})`;
    }

    function revertOrangeBall() {
        yellowBall.style.transform = 'scale(1)';
        yellowBall.style.transition = 'transform 500ms ease';
        workOrbOrange.style.transition = 'opacity 400ms ease';
        workOrbOrange.style.opacity = '0';
    }

    function revertPurpleBall() {
        purpleBall.style.transform = 'scale(1)';
        purpleBall.style.transition = 'transform 500ms ease';
        purpleBall.style.zIndex = '1';
        aboutText.style.visibility = 'hidden';
        aboutText.style.transition = 'opacity 500ms ease';
        aboutText.style.opacity = '0';
        aboutOrbGreen.style.transition = 'opacity 400ms ease';
        aboutOrbGreen.style.opacity = '0';
        aboutOrbOrange.style.transition = 'opacity 400ms ease';
        aboutOrbOrange.style.opacity = '0';
        aboutOrbYellow.style.transition = 'opacity 400ms ease';
        aboutOrbYellow.style.opacity = '0';
        
        
        setTimeout(() => {
            topNavItems.forEach(item => {
                item.style.color = '#000000';
            });
            blueBall.style.visibility = 'visible';
            blueBall.style.transition = 'opacity 500ms ease';
            blueBall.style.opacity = '1';
            orangeBall.style.visibility = 'visible';
            orangeBall.style.transition = 'opacity 500ms ease';
            orangeBall.style.opacity = '1';
            yellowBall.style.visibility = 'visible';
            yellowBall.style.transition = 'opacity 500ms ease';
            yellowBall.style.opacity = '1';
            greenBall.style.visibility = 'visible';
            greenBall.style.transition = 'opacity 500ms ease';
            greenBall.style.opacity = '1';
            redBall.style.visibility = 'visible';
            redBall.style.transition = 'opacity 500ms ease';
            redBall.style.opacity = '1';
            aboutOrbGreen.style.top = '0%';
            aboutOrbOrange.style.top = '0%';
            aboutOrbYellow.style.top = '0%';
            // change Balls back to its original transition time
            purpleBall.style.transition = 'transform 300ms ease';
            setTimeout(() => {
                blueBall.style.transition = 'transform 300ms ease';
                orangeBall.style.transition = 'transform 300ms ease';
                yellowBall.style.transition = 'transform 300ms ease';
                greenBall.style.transition = 'transform 300ms ease';
                redBall.style.transition = 'transform 300ms ease'; 
            }, 400);
        }, 350);
    
    }
});