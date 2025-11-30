function searchVideos() {
    const query = document.getElementById('search').value.trim();
    if (!query) return;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    // Use noembed.com to get info for top 5 YouTube videos
    const videos = [
        `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`
    ];

    // For demo purposes, create placeholder search results
    for (let i = 1; i <= 5; i++) {
        const videoId = "dQw4w9WgXcQ"; // Placeholder video
        const card = document.createElement('div');
        card.className = 'video-card';
        card.innerHTML = `
            <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="Video Thumbnail">
            <p>${query} Video ${i}</p>
        `;
        card.onclick = () => playVideo(videoId);
        resultsDiv.appendChild(card);
    }
}

function playVideo(videoId) {
    const player = document.getElementById('player');
    player.src = `https://www.youtube.com/embed/${videoId}`;
}
