var calculator = calculator || {};
calculator.controller = (function () {

    var calForm;
    var calFormInput;

    return {
        _init: function () {
            calForm = document.forms['cal']; //name=cal 인 form 객체를 선택
            calFormInput = calForm.getElementsByTagName('input');

            for (var i = 0; i < calFormInput.length; i++) {
                var inputValue = calFormInput[i].value;

                if (inputValue != 'clear' && inputValue != '=') {
                    calFormInput[i].addEventListener('click', function () {
                        var result = document.getElementById('result');
                        if(result.innerHTML == '0'){
                            result.innerHTML = '';
                        }
                        result.innerHTML += this.value;
                    });
                } else if (inputValue == 'clear') {
                    // calFormInput[i].addEventListener('click', function () {
                    //     document.getElementById('result').innerHTML = '';
                    // });

                    //이런식으로도 작성이 가능.
                    calFormInput[i].onclick = function () {
                        document.getElementById('result').innerHTML = '';
                    }

                } else if (inputValue == '=') {
                    calFormInput[i].addEventListener('click', calculator.controller._executeCalculate);
                }
            }
        },
        _executeCalculate: function () {
            var processCalString = document.getElementById('result').innerHTML;
            var resultNum = 0;
            console.log(processCalString.trim());
            try {
                resultNum = eval(processCalString.trim());
                document.getElementById('result').innerHTML = resultNum;
            } catch (err) {
                console.log(err);
                document.getElementById('result').innerHTML = '0';
            }
        }
    }
})();