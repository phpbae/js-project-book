var calender = calender || {};
calender.controller = (function () {

    var year;
    var month;

    return {
        _init: function () {
            var date = new Date(); //Date 객체 생성
            year = date.getFullYear(); //년도
            month = date.getMonth(); //월 0~11까지 반환
            var todayDate = date.getDate();

            var thisYearMonthFirstDate = new Date(year, month, 1).getDate(); //1일을 구함(지정한 년도, 월의 1일)
            var thisYearMonthFirstDay = new Date(year, month, 1).getDay(); //요일(일~토) 0~6 반환
            // var thisYearMonthLastDate = new Date(year, month, 0).getDate(); //마지막 일을 구함
            var thisYearMonthLastDate = 32 - new Date(year, month, 32).getDate(); //마지막 일을 구함(이거는 정상, 주석처리한 코드는 왜 안되는지 모르겠다;; 잘못된 값이 나온다.)
            var thisYearMonthLastDay = new Date(year, month, 0).getDay();

            calender.controller._printCalender(year, month, thisYearMonthFirstDay, thisYearMonthFirstDate, thisYearMonthLastDate, todayDate);

            document.getElementById('pre-calender').onclick = function () {
                var currentYear = calender.controller._getYear();
                var currentMonth = calender.controller._getMonth();
                var prevDate = new Date(currentYear, currentMonth, 1);
                prevDate.setDate(0);
                var firstDay = new Date(prevDate.getFullYear(), prevDate.getMonth(), 1).getDay();
                callPrintCalender(prevDate.getFullYear(), prevDate.getMonth(), firstDay, 1, prevDate.getDate(), null);
                year = prevDate.getFullYear();
                month = prevDate.getMonth();
            }

            document.getElementById('next-calender').onclick = function () {
                var currentYear = calender.controller._getYear();
                var currentMonth = calender.controller._getMonth();
                var currentLastDay = 32 - new Date(currentYear, currentMonth, 32).getDate();
                var nextDate = new Date(currentYear, currentMonth, currentLastDay);
                nextDate.setDate(currentLastDay + 1);
                var lastDay = 32 - new Date(nextDate.getFullYear(), nextDate.getMonth(), 32).getDate();
                callPrintCalender(nextDate.getFullYear(), nextDate.getMonth(), nextDate.getDay(), 1, lastDay, null);
                year = nextDate.getFullYear();
                month = nextDate.getMonth();
            }

        },

        _printCalender: function (year, month, firstDay, firstDate, lastDate, todayDate) {
            var calenderContents = document.getElementById('calender-contents');
            calenderContents.innerHTML = '';

            for (var i = 1; i <= 6; i++) {
                var trElement = document.createElement('tr');
                for (var x = 1; x <= 7; x++) {
                    trElement.appendChild(document.createElement('td'));
                }
                calenderContents.appendChild(trElement);
            }

            var tdElement = calenderContents.getElementsByTagName('td');
            var tdIndex = firstDay;

            for (var i = 1; i <= lastDate; i++) {
                tdElement[tdIndex].innerHTML = i;
                if (i == todayDate) {
                    tdElement[tdIndex].className = 'high-light';
                }
                tdIndex++;
            }
            document.getElementById('title').innerHTML = year + '년 ' + (month + 1) + '월';

        },
        _getYear: function () {
            return year;
        },
        _getMonth: function () {
            return month;
        }
    }
})();

function callPrintCalender(year, month, firstDay, firstDate, lastDate, todayDate) {
    calender.controller._printCalender(year, month, firstDay, firstDate, lastDate, todayDate);
}