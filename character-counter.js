function countLetters(text) {
  text = text.toLowerCase().split(" ").join("");
  letterCounts = {};

  for (var i = 0; i < text.length; i++) {
    currentLetter = text[i];
    if (letterCounts[currentLetter]) {
      letterCounts[currentLetter]++;
    } else {letterCounts[currentLetter] = 1}
  }

  return letterCounts;
}

console.log(countLetters("lighthouse in the house"));
