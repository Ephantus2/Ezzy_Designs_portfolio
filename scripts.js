let span = document.querySelector('.date');
let year = new Date().getFullYear();
console.log(year)
span.innerText = year;

    window.addEventListener('load', function() {
      setTimeout(function() {
        const homeLink = document.getElementById('homeLink');
        if (homeLink) {
          homeLink.click(); // Simulate click after delay
        }
      }, 2000); // 2000 milliseconds = 2 seconds
    });