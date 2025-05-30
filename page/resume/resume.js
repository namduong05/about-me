document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(bar => {
          const value = bar.getAttribute('data-percent');
          bar.style.width = value;
          bar.textContent = value;
        });
        obs.disconnect(); // Chạy 1 lần duy nhất
      }
    });
  }, {
    threshold: 0.4
  });

  observer.observe(document.querySelector('#skills'));
});
