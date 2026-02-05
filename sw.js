self.addEventListener('install', (e) => {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', (e) => {
  // Тут сайт може працювати офлайн, але поки просто пропускаємо запити
  e.respondWith(fetch(e.request));
});
