export default class Acronym {
  static parse(phrase: string): string {
    let parts = phrase.match(/[A-Z]+[a-z]*|[a-z]+/g);
    if (parts == null) { return ''; }
    return parts.reduce((acc, c) => acc += c[0].toUpperCase(), '');
  }
  
}

 /* MAUVAISE PRATIQUE !!!! 
  public static parse(s: string): string {
    let acronym: string = '';
    let aWord: Array<string> = s.split(' ');

    for (const word of aWord) {
      let aManyUppercase: null | Array<string> = word.match(/[A-Z]/g);
      console.log(1);
      if (aManyUppercase !== null && aManyUppercase.length > 1 && word.indexOf(':') === -1) {
        console.log(word, 2);
        aManyUppercase.forEach((s) => {
          acronym = acronym.concat(s);
        });
      } else if (word.indexOf(':') !== -1) {
        console.log(3)
        acronym = word.replace(':', '');
      } else if (word.indexOf('-') !== -1) {
        console.log(4);
        let newAword: Array<string> = word.split('-');
        newAword.forEach((s) => {
          acronym = acronym.concat(s.substring(0, 1).toUpperCase());
        });
      } else if (!aManyUppercase || aManyUppercase.length === 1) {
        console.log(5);
        let firstLetter: string = word.substring(0, 1);
        acronym = acronym.concat(firstLetter).toUpperCase();
      }
    }

    console.log(acronym);
    return acronym;
  }
  */