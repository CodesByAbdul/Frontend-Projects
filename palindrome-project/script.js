const textInput = document.getElementById('text-input');
const palindromeResult = document.getElementById('result');
const checkButton = document.getElementById('check-btn');

function checkInput () {
  let text = textInput.value;
  if (text === '') {
    alert('Please input a value');
    return;
  } else if (isPalindrome(text)) {
    palindromeResult.textContent = `${text} is a palindrome.`;
  } else {
    palindromeResult.textContent = `${text} is not a palindrome.`;
  }
}

function isPalindrome(text) {
  // Convert to lowercase and remove non-alphanumeric characters
  const cleanedText = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Check if the cleaned text is a palindrome
  const reversedText = cleanedText.split('').reverse().join('');
  return cleanedText === reversedText;
}

checkButton.addEventListener('click', checkInput);