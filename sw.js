<script>
  let deferredPrompt;
  const installBanner = document.getElementById('pwa-install-banner');

  // Слухаємо подію браузера "можна встановити"
  window.addEventListener('beforeinstallprompt', (e) => {
    // Не даємо браузеру показати свій стандартний (і непомітний) запит
    e.preventDefault();
    // Зберігаємо подію, щоб викликати її пізніше
    deferredPrompt = e;
    // Показуємо нашу круту червону кнопку
    installBanner.style.display = 'block';
  });

  // Логіка натискання на кнопку
  installBanner.addEventListener('click', async () => {
    if (deferredPrompt) {
      // Показуємо вікно встановлення
      deferredPrompt.prompt();
      // Чекаємо відповіді користувача
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`Результат встановлення: ${outcome}`);
      // Ховаємо кнопку
      deferredPrompt = null;
      installBanner.style.display = 'none';
    }
  });

  // Реєстрація Service Worker (це було у тебе раніше)
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
</script>
