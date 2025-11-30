async function searchSong() {
    const query = document.getElementById('search').value.trim();
    if (!query) return;

    // Using TheAudioDB free API v1
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
            img.src = track.strTrackThumb || 'https://via.placeholder.com/120';
            img.alt = track.strTrack;

            const infoDiv = document.createElement('div');
            infoDiv.className = 'track-info';
            infoDiv.innerHTML = `
                <p><strong>${track.strTrack}</strong></p>
                <p>${track.strArtist} - ${track.strAlbum || 'Unknown Album'}</p>
            `;

            const playButton = document.createElement('button');
            playButton.textContent = 'Play Video';
            playButton.onclick = () => playTrack(track.strMusicVid, trackDiv);

            trackDiv.appendChild(img);
            trackDiv.appendChild(infoDiv);
            trackDiv.appendChild(playButton);

            resultsDiv.appendChild(trackDiv);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
}

// Embed YouTube video
function playTrack(url, container) {
    if (!url) {
        alert("No video available for this track.");
        return;
    }

    // Remove existing iframe if present
    const existingIframe = container.querySelector('iframe');
    if (existingIframe) existingIframe.remove();

    const iframe = document.createElement('iframe');
    iframe.width = "400";
    iframe.height = "225";
    iframe.src = url.replace("watch?v=", "embed/"); // convert to YouTube embed
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;

    container.appendChild(iframe);
}
