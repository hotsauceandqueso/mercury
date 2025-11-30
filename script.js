const API_KEY = 'AIzaSyBMOMNiDI-ASbl61gv-fecfxETRTjOznxo'; // Replace with your API key from Google Cloud

async function searchVideos() {
    const query = document.getElementById('search').value.trim();
    if (!query) return;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = 'Searching...';

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=10&q=${encodeURIComponent(query)}&key=${API_KEY}`
        );
        const data = await response.json();

        resultsDiv.innerHTML = '';
        if (data.items && data.items.length > 0) {
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const title = item.snippet.title;
                const thumbnail = item.snippet.thumbnails.medium.url;

                const card = document.createElement('div');
                card.className = 'video-card';
                card.innerHTML = `
                    <img src="${thumbnail}" alt="${title}">
                    <p>${title}</p>
                `;
                card.onclick = () => playVideo(videoId);
                resultsDiv.appendChild(card);
            });
        } else {
            resultsDiv.innerHTML = '<p>No results found.</p>';
        }
    } catch (err) {
        resultsDiv.innerHTML = '<p>Error fetching videos. Try again later.</p>';
        console.error(err);
    }
}

function playVideo(videoId) {
    const player = document.getElementById('player');
    player.src = `https://www.youtube.com/embed/${videoId}`;
}
