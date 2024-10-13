function generateWaves() {
    const waveContainer = document.getElementById('wave-container');
    const waveSymbols = ['~', '~~', '~~~', '~~~~'];
    const isMobile = window.innerWidth <= 768; // Consider screens <= 768px as mobile
    const waveLinesCount = Math.ceil(window.innerHeight / (isMobile ? 80 : 30)); // Fewer waves on mobile

    waveContainer.innerHTML = '';
    for (let i = 0; i < waveLinesCount; i++) {
        let waveLine = document.createElement('div');
        waveLine.className = 'wave-line';
        waveLine.style.top = `${Math.random() * window.innerHeight}px`;
        waveLine.style.left = `${Math.random() * window.innerWidth}px`;

        // Add randomness to the wave pattern to make it look more natural
        let waveText = '';
        const waveLength = Math.floor(Math.random() * (isMobile ? 7 : 10)) + (isMobile ? 3 : 5); // Shorter waves on mobile
        for (let j = 0; j < waveLength; j++) {
            if (Math.random() > 0.7) {
                waveText += '    '; // Add more gaps to make it irregular
            } else {
                waveText += waveSymbols[Math.floor(Math.random() * waveSymbols.length)] + ' ';
            }
        }

        waveLine.textContent = waveText;
        waveContainer.appendChild(waveLine);
    }
}

window.onload = generateWaves;
window.onresize = generateWaves;