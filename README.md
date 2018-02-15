# js-project-book
JavaScript 프로젝트북에 있는 예제 코드? 예제 프로젝트를 작성.


---

### 구구단 작성
- 구구단은  prompt() 메소드를 이용해서, 입력받은 수를 기준으로 구구단을 출력하게 함.
- 입력받는 값이 숫자인지, 올바른 값인지 확인이 필요하여, isNaN()을 이용해서 확인.

---

### DOM요소를 추가 작성 
- 처음에 요소를 추가 후, _initEvent()를 호출함. 그런데 문제가 발생.
- 문제 : 추가된 요소만 클릭 이벤트가 정상작동 하며, 기존에 있던 요소에는 이벤트가 작동하지를 않음.(확인해 보니, addEventListener 를 또 걸면서, 해당 리스너가 중복으로 지정되서 발생하는 문제인거 같다.)
- 해결 : 기존에 li 요소에 event를 걸지 말고, 부모요소인 ul에 이벤트를 걸고, 동적으로 생성되는 요소는 event 객체를 처리하게 변경.
- 실패한 해결 : 추가한 이벤트 리스너를 풀면 되겠지 했지만(removeEventListener), 역시 이 방법이 잘 되지 않아, event 객체로 해결을봄.

---

### 계산기 작성
- pure JS로 작성
- jQuery를 CDN으로 import 시켜서, 작성
- 확실히 2가지를 작성해서 비교하니, jQuery가 간결하고 핸들링하기 편하다.

---

### 달력 작성
```js
new Date()
new Date(milliseconds)
new Date(dateString)
new Date(year, month, day, hours, minutes, seconds, milliseconds)
```

- JS에서 제공하는 Date()를 이용하면 된다.
- setDate(0), setDate(해당월의총일수 + 1) 을 이용하면, 아주 쉽게 해당달의 날짜를 벗어나는 경우 이전/이후 달로 자동계산을 해준다.
- 커서를 이용해서, 이전달, 다음달 이동이 가능하게 구현하였다.

---