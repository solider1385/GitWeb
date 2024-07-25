let number = document.getElementById('number');
    let circle = document.getElementById('circle');
    let count = 0;

    circle.addEventListener('click', function() {
      count++;
      number.innerHTML = count + " D";
});

