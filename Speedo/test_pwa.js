function getPWADisplayMode() {
    if (document.referrer.startsWith('android-app://'))
      return 'twa';
    if (window.matchMedia('(display-mode: browser)').matches)
      return 'browser';
    if (window.matchMedia('(display-mode: standalone)').matches)
      return 'standalone';
    if (window.matchMedia('(display-mode: minimal-ui)').matches)
      return 'minimal-ui';
    if (window.matchMedia('(display-mode: fullscreen)').matches)
      return 'fullscreen';
    if (window.matchMedia('(display-mode: window-controls-overlay)').matches)
      return 'window-controls-overlay';
  
    return 'unknown';
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    // Log launch display mode to analytics
    console.log('DISPLAY_MODE_LAUNCH:', getPWADisplayMode());
  });
  