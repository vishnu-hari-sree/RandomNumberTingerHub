function generateRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    var resultElement = document.getElementById('result');
    resultElement.textContent = 'Generated Number: ' + randomNumber;
  }
  