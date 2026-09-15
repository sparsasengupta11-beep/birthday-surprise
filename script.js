function openSurprise() {
    const screen = document.getElementById('welcome-screen');
    if (screen.classList.contains('opening')) return;
    screen.classList.add('opening');
    screen.style.opacity = '0';
    screen.style.transform = 'scale(1.2)';
    
    setTimeout(() => {
        screen.style.display = 'none';
        const content = document.getElementById('main-content');
        content.style.display = 'block';
        content.classList.add('revealed');
        fireConfetti();
    }, 800);
}

function showCakeSurprise() {
    const surprise = document.getElementById('cake-surprise');
    surprise.classList.add('visible');
    surprise.setAttribute('aria-hidden', 'false');
    surprise.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function blowCandles() {
    const cake = document.querySelector('.cake');
    const message = document.getElementById('wish-message');
    if (cake.classList.contains('blown')) return;
    cake.classList.add('blown');
    message.textContent = 'Wish granted! May your birthday be as beautiful as you are! 🎉💖';
    fireConfetti();
}

function fireConfetti() {
    const colors = ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd', '#f9bec7'];
    for(let i = 0; i < 150; i++) {
        let conf = document.createElement('div');
        conf.classList.add('confetti');
        
        // Randomize confetti properties
        conf.style.left = Math.random() * 100 + 'vw';
        conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Randomize shapes (some squares, some circles)
        if (Math.random() > 0.5) conf.style.borderRadius = '50%';
        
        // Randomize animation speed and delay
        let duration = Math.random() * 3 + 2; // 2s to 5s
        let delay = Math.random() * 2;
        
        conf.style.animation = `fall ${duration}s linear ${delay}s infinite`;
        document.body.appendChild(conf);
    }
}