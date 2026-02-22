self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Để trống để trình duyệt hiểu là có xử lý mạng
  e.respondWith(fetch(e.request));
});