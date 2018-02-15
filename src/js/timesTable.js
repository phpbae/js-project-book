var timesTable = timesTable || {};

timesTable.controller = (function () {

    var num;


    return {
        _setNum: function () {
            var tempInput = prompt('구구단 몇 단을 볼까요?(1~9 숫자 입력)');
            if (tempInput != null) {
                if (timesTable.controller._validCheckInput(tempInput)) {
                    timesTable.controller._printTimesTable();
                }
            }
        },

        _validCheckInput: function (tempInput) {
            if (tempInput == '' || isNaN(tempInput)) {
                alert('올바른 값을 입력하세요.');
                return false;
            } else {
                num = tempInput;
            }

            return true;
        },

        _printTimesTable: function () {
            var resultElement = document.getElementById('result');
            resultElement.innerHTML = '';
            for (var i = 1; i <= 9; i++) {
                var childElement = document.createElement('p');
                childElement.innerHTML = num + ' * ' + i + ' = ' + num * i;
                resultElement.appendChild(childElement);
            }

        }
    }

})();


var appendWork = appendWork || {};

appendWork.controller = (function () {

    var addBtn;
    var list;
    var listChild;

    return {
        _initEvent: function () {
            addBtn = document.getElementById('add-work');
            list = document.getElementById('work-list');
            listChild = list.getElementsByTagName('li');

            list.addEventListener('click', function (event) {
                if (event.target.nodeName == 'LI') {
                    if (event.target.classList.contains('active')) {
                        event.target.classList.remove('active');
                    } else {
                        // this.setAttribute('class', 'active');
                        event.target.className = 'active';
                    }
                }
            })

            addBtn.addEventListener('click', appendWork.controller._append);

        },
        _append: function () {
            var createdChild = document.createElement('li');
            createdChild.innerHTML = '새로 추가된 할일!!';
            list.appendChild(createdChild);
        },

    }
})();