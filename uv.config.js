cat > /var/www/mercury/uv/sw.js << 'EOF'
importScripts('/uv/uv.bundle.js');
importScripts('/uv.config.js');
importScripts('/uv/uv.config.js');
importScripts('/uv/uv.sw.js');

const ultraviolet = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    if (ultraviolet.route(event)) {
        event.respondWith(
            (async () => ultraviolet.fetch(event))()
        );
    }
});
EOF
