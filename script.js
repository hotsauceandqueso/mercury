async function searchSong() {
    const query = document.getElementById('search').value.trim();
    if (!query) return;

    const url = `https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=${query}&t=${query}`;
    const res = await fetch(url);
    const data = await res.json();

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.track) {
        data.track.forEach(track => {
            const trackDiv = document.createElement('div');
            trackDiv.className = 'track';

            const img = document.createElement('img');
            img.src = track.strTrackThumb || 'https://via.placeholder.com/60';
            img.alt = track.strTrack;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'track-info';
            infoDiv.innerHTML = `<p><strong>${track.strTrack}</strong></p><p>${track.strArtist} - ${track.strAlbum}</p>`;

            const playButton = document.createElement('button');
            playButton.textContent = 'Play';
            playButton.onclick = () => playTrack(track.strMusicVid);

            trackDiv.appendChild(img);
            trackDiv.appendChild(infoDiv);
            trackDiv.appendChild(playButton);

            resultsDiv.appendChild(trackDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}

function playTrack(url) {
    const player = document.getElementById('player');
    if (!url) {
        alert("No playable audio available for this track.");
        return;
    }
    player.src = url;
    player.play();
}
