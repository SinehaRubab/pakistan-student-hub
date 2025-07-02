const toggle = document.getElementById('darkModeToggle');
  toggle.onclick = () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent = document.body.classList.contains('dark-mode') ? '🌙' : '🌞';
  };


  let count = 0;
  const target = 10;
  const counter = document.getElementById("count1");
  const interval = setInterval(() => {
    if (count < target) {
      count++;
      counter.textContent = count + "+";
    } else {
      clearInterval(interval);
    }
  }, 20);

