const counters = document.getElementById('.counter');

counters.forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const speed = 200; // lower = faster

  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 10);
    } else {
      counter.innerText = target; // ensure final value is accurate
    }
  };

  updateCount();
});
