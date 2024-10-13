function generateWaves() {
    const waveContainer = document.getElementById('wave-container');
    const waveSymbols = ['~', '~~', '~~~', '~~~~'];
    const waveLinesCount = Math.ceil(window.innerHeight / 30);

    waveContainer.innerHTML = '';
    for (let i = 0; i < waveLinesCount; i++) {
        let waveLine = document.createElement('div');
        waveLine.className = 'wave-line';
        waveLine.style.top = `${Math.random() * window.innerHeight}px`;
        waveLine.style.left = `${Math.random() * window.innerWidth}px`;

        // Add randomness to the wave pattern to make it look more natural
        let waveText = '';
        const waveLength = Math.floor(Math.random() * 10) + 5; // Random length for each wave line
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