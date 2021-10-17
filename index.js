const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  
  const toUppers = (string) => {
    const splitPhrase = string.split(' ');
    debugger
    const capitols = splitPhrase.map(element => {
      const letters = element.split('');
      debugger
      letters[0]=letters[0].toUpperCase();
      debugger
      return letters.join('');
    });
    return capitols.join(' ');;
  }

  return tutorials.map(element => toUppers(element));
}
