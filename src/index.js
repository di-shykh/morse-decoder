const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let i=0;
    let encodedLetters=[];

    while (i<expr.length){
        encodedLetters.push(expr.substr(i,10));
        i+=10;
    }
    console.log(encodedLetters);
    let MORSE_TABLE01={};
    let tempStr;

    for(let key in MORSE_TABLE){

        tempStr=key.replaceAll('.','10');
        tempStr=tempStr.replaceAll('-','11');

        if(tempStr.length<10){
            let arrLength=tempStr.length;
            let tempArr=tempStr.split('');
            while(tempArr.length<10){
                tempArr.unshift('0');
            }
            tempStr=tempArr.join('');
        } 
        MORSE_TABLE01[tempStr]=MORSE_TABLE[key];
    }
    MORSE_TABLE01['**********']=' ';
    console.log(MORSE_TABLE01);
    let decodeArr=[];
    decodeArr=encodedLetters.map(el=>MORSE_TABLE01[el]);
    console.log(decodeArr);
    return decodeArr.join('');
}

module.exports = {
    decode
}