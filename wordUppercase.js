function wordsUppercase(text) {
    // Use a regular expression to extract all words from the input string
    const words = text.match(/\w+/g);
  
    // Convert the words to uppercase and join them with ", "
    const result = words.map(word => word.toUpperCase()).join(', ');
  
    // Print the result
    console.log(result);
  }