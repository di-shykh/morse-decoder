const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let arrOfChars10 = [];
    for (let i = 0; i < expr.length - 9; i += 10) {
        arrOfChars10.push(expr.substr(i, 10));
    }
    let arrOfMorese = arrOfChars10.map(item => {
        if (item === '**********') item = ' '
        else {
            let tempElement=item;
            for (let j = 0; j < 5; j++) {
                tempElement = tempElement.replace('00', '');
                tempElement = tempElement.replace('10', '.');
                tempElement = tempElement.replace('11', '-');
            }
            item=tempElement;
        }
        return item;
    })
    return arrOfMorese.map(item => MORSE_TABLE[item] ? MORSE_TABLE[item] : ' ').join('');
}
module.exports = {
    decode
}