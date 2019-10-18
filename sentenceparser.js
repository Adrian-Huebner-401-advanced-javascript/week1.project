'use strict';

//imput command line text entry
//save words to the sentence parser instance
//pass that into the constructor
//which will push it into the array this.words
//then the class 

const fs = require('fs');
const sentenceInput = process.argv[2];

class SentenceParser {
  constructor (){
    this.words = sentence.split(' ');
  }

  write(){
    const sentence = this.words.join(' ');
    fs.writeFile('data/gooddata.txt', sentence, (err) => {
      if(err){
        console.error(err);
      } 
      console.log('File Written');
    });
  }
  /**
   * @param {*} find 
   * @param {*} replace 
   */
  replace(find,replace){
    return new Promise((resolve, reject) => {
      if (this.words.includes(find)){
        let wordIndex = this.words.indexOf(find);
        this.words[wordIndex] = replace;
        const newSentence = this.words.join(' ');
        resolve(newSentence);
      } else{
        reject('Word not found');
      }
  });
}
}

const sentenceParser = new SentenceParser(sentenceInput);
sentenceParser.replace('a', 'blah')
  .then(sentence.write)
  .catch(err => console.error(err));
