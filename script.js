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
        localStorage.removeItem('answered', 'true');
    } else {
        resultElementW.style.display = 'inherit';
    }
}

const judgeAnwser = (input) => {
    console.log(Array.from(input))
    cipher = Array.from(input).reduce((acc, e) => acc * 91 + e.codePointAt(0), 0) % 100003;
    console.log(cipher);
    if(cipher == 74401 ) return 1;
    if(cipher == 82194) return 2;
    if(cipher == 26143) return 3;
    return 0;
}

const refCheck = () => {
    if (!localStorage.getItem('answered')){
        window.location.href = 'index.html';
    }
}
