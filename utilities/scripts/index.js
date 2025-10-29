    function updateTime() {
      document.getElementById("time").textContent = Date.now();
    }
    updateTime();
    setInterval(updateTime, 500);