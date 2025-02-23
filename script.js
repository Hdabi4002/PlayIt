const songSelect = document.getElementById('songSelect');
const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');

// Change audio source based on selected song
songSelect.addEventListener('change', () => {
    audio.src = songSelect.value;
    audio.load(); // Load the new song
});

// Play the selected song
playButton.addEventListener('click', () => {
    if (songSelect.value) {
        audio.play();
    } else {
        alert('Please select a song first.');
    }
});
pauseButton.addEventListener('click', () => {
    if (songSelect.value) {
        audio.pause();
    } 
});