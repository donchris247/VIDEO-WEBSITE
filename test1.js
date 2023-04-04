function stringChallenge(sen) {
    let wordArr = sen.split(' ');

    let sorted = wordArr.sort((a, b) => b.length - a.length);

    return sorted[0];

}

console.log(stringChallenge('welcome to javascript programming'));

function strChal(str) {
    let open = ['<div', '<p', '<b', 'i', '<em'], close = ['</div', '</p', '</b', '</i', '</em'];
    let strArr = str.split('>');

    let output = true;

    for(let i = 0; i < open.length; i++) {
        if(str.indexOf(open[i] + '>' !== -1)) {
            console.log(str.indexOf('<div>'));
            if(str.indexOf(close[i] + '>' === -1)) {
                output = open[i].replace('<', '');
                break;
            }
        }
    }

    let outCode = 'aupqht1b63'
    let challengeCode = output + outCode;

     let outArr = challengeCode.split('');

     for(let i = 1; i <= outArr.length; i++) {
        if(i % 3 === 0) {
            outArr[i] = 'X';
        }
     }
     
    return outArr.join('');
}

console.log(strChal('<div><b></b></div></p>'));