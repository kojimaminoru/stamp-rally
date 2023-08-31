const check = () => {
    const formElement = document.getElementById('form');
    const resultElementW = document.getElementById('result-wrong');
    const resultElementF = document.getElementById('result-first');
    const result = judgeAnwser(formElement.value);
    resultElementW.style.display = 'none';
    resultElementF.style.display = 'none';
    if (result == 1) {
        resultElementF.style.display = 'inherit';
    } else if (result == 2) {
        localStorage.setItem('answered', 'true');
        window.location.href = 'second.html';
    } else {
        resultElementW.style.display = 'inherit';
    }
}

const check2 = () => {
    const formElement = document.getElementById('form2');
    const resultElementW = document.getElementById('result-wrong');
    const resultElementS = document.getElementById('result-second');
    const resultElementC = document.getElementById('result-clear');
    const result = judgeAnwser(formElement.value);
    if (result == 3) {
        resultElementW.style.display = 'none';
        resultElementS.style.display = 'none';
        resultElementC.style.display = 'inherit';
    } else {
        resultElementW.style.display = 'inherit';
    }
}

const judgeAnwser = (input) => {
    input = '' + input;
    if(input === 'びっとこいん') return 1;
    if(input === 'ごまふあざらし') return 2;
    if(input === '星') return 3;
    return 0;
}

const refCheck = () => {
    if (!localStorage.getItem('answered')){
        window.location.href = 'index.html';
    }
}
