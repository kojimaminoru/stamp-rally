const check = () => {
    const formElement = document.getElementById('form');
    const resultElementW = document.getElementById('result-wrong');
    const resultElementF = document.getElementById('result-first');
    const resultElementS = document.getElementById('result-second');
    const result = judgeAnwser(formElement.value);
    resultElementW.style.display = 'none';
    resultElementF.style.display = 'none';
    resultElementS.style.display = 'none';
    if (result == 0) {
        resultElementW.style.display = 'inherit';
    } else if (result == 1) {
        resultElementF.style.display = 'inherit';
    } else {
        resultElementS.style.display = 'inherit';
    }
}

const judgeAnwser = (input) => {
    input = 'A' + input;
    if(input === 'A1') return 1;
    if(input === 'A2') return 2;
    return 0;
}