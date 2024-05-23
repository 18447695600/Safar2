// these phrases will repeat
const phrases = [
    "Manali!",
    "Rishikesh!",
    "Kedarnath!",
    "Rudarnath!",
    "Vrindavan!"
  ];
  
  // start with initial random phrase from the collection
  // Math.floor reduces float to integer
  let currentPhrase = Math.floor(Math.random() * (phrases.length - 1));
  let currentChar = 0;
  // this element has the typing line
  let typingLine = document.getElementById("typing");
  
  // type() the phrase char-by-char
  //
  function type() {
    // write sub-string to the element
    typingLine.textContent = phrases[currentPhrase].slice(0, ++currentChar);
  
    // continue to write until we run out of phrase-chars
    if (currentChar < phrases[currentPhrase].length) {
      // slow down the animation
      setTimeout(function () {
        // animates the changes to DOM
        requestAnimationFrame(type);
      }, 80);
    } else {
      // we ran out of phrase length
      // now wait 2 seconds
      // then call "erase" method to start erasing
      setTimeout(erase, 2000);
    }
  }
  
  // erase() characters one-by-one
  //
  function erase() {
    // reduce one char, assign to the element
    typingLine.textContent = phrases[currentPhrase].slice(0, --currentChar);
  
    // we still have more chars to erase
    if (currentChar > 0) {
      // pause 25ms, then animate the element rendering
      setTimeout(function () {
        requestAnimationFrame(erase);
      }, 45);
    } else {
      // we ran out of chars for current phrase
      // reset to first char
      currentChar = 0;
      // move to the next phrase
      // "%" ensures endless loop within phrases
      currentPhrase = (currentPhrase + 1) % phrases.length;
      // all erased? now start "typing" again
      setTimeout(type, 1100);
    }
  }
  
  // start the first "typing"
  type();