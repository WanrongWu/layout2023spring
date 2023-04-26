  /* Toggle Animations */
  const jstoggle = document.getElementById('stop');
  jstoggle.addEventListener('click', () => {
    const animations = document.querySelectorAll('[rbar-rolling');
    animations.forEach(animation => {
      const running = animation.style.animationPlayState || 'running';
      animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    })
  });
