/**
 * Dom이 아주 많고 이벤트가 복잡하다면 초기화단계에서 이벤트 리스너를 할당하는 것은
 * 초기화 단계에서 컴퓨팅 자원을 많이 소모하는 문제가 발생
 * 하나의 부모 DOM을 만들어서 이벤트를 처리하는 것이 이벤트 델리게이션 패턴
 * 
 * 다수의 DOM에 한꺼번에 이벤트리스너를 할당해야 할 때
 * 동적인 DOM에 이벤트리스너를 그때그때 할당해야 할 때
 */

 // 이벤트 버블링 : 특정 DOM에서 이벤트가 발생하면 가장 하위 DOM부터 상위의 부모 DOM으로 전파
 // 이벤트 캡처링 : 최상위 부모DOM부터 가장 하위의 DOM까지 부모에서부터 전파

(function () {
    var wrapper = document.getElementById("tableWrapper");
    wrapper.addEventListener("mouseover", function () {

    }, true);  // 버블링(false), 캡쳐링(true)
})