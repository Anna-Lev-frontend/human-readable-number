module.exports = function toReadable(number) {
    const arr = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

    const hundred = 'hundred';
    const endTy = 'ty';
    const numStr = String(number);
    if (number < 20 || numStr.lenght === 2 && numStr[1] === '0') {
        return arr[number];
    } else if (numStr > 19 && numStr < 100) {
        if ((numStr[1] === '0')) {
            return `${arr[numStr[0] + '0']}`;
        }
        return `${arr[numStr[0] + '0']} ${arr[numStr[1]]}`;
    }
    else if (numStr >= 100 && numStr < 1000) {
        if (numStr[1] === '0' && numStr[2] === '0') {
            return `${arr[numStr[0]]} ${hundred}`
        }
        if (numStr[1] === '8' && numStr[2] === '0') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1] + '0']}`
        }
        if (numStr[1] === '9' && numStr[2] === '0') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1] + '0']}`
        }

        if (numStr[1] === '1' && numStr[2] === '1') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1]+'1']}`
        }
        if(numStr[1] === '0' && numStr[2] === '1') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[2]]}`
        }
        if (numStr[1] === '0' && numStr[2] === '6') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[2]]}`
        }
        if (numStr[1] === '0' && numStr[2] === '7') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[2]]}`
        }
        if (numStr[1] === '1' && numStr[2] === '3') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1]+'3']}`
        }
        if (numStr[1] === '1' && numStr[2] === '9') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1] + '9']}`
        }
        if (numStr[1] === '0' && numStr[2] === '9') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[2]]}`
        }
        if (numStr[1] === '1' && numStr[2] === '6') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1]+'6']}`
        }
        if (numStr[1] === '0' && numStr[2] === '2') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[2]]}`
        }
        if (numStr[2] === '0') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1] + '0']}`;
        }
        if (numStr[1] === '0') {
            return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1]]}`;
        }

        return `${arr[numStr[0]]} ${hundred} ${arr[numStr[1] + '0']} ${arr[numStr[2]]}`;
    }


    //149


}
