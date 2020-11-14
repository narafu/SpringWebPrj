// $(function () {

//     var section = $("#s1");
//     var xInput = section.find(".x-input");

// xInput.get(0).value = "3";
// xInput.attr("type", "button");
// xInput.attr("value", "변경");
// xInput.val("변경");

// var span = section.find("span");
// span.html("<b>Hello</b>");
// span.html("<input type='button' value='Hello'>");
// span.text(8+9);

// span.css("color", "blue");
// span.css("font-size", "30px");

// span
//     .css({ color: "blue", "font-size": "30px" })
//     .animate({ marginLeft: "200px" });

// span.addClass("span-style");

// var submitButton = section.find("input[type='submit']");

// submitButton.click(function () {

// if (!span.hasClass("active"))
//     span.addClass("active");
// else {
//     span.removeClass("active");
// }

// span.toggleClass("active");

// var w = xInput.width();
// xInput.width(300);

// var offset = span.offset();
// var pos = span.position();

// console.log("offset.left :" + offset.left);
// console.log("offset.top: " + offset.top);
// console.log("pos.left: " + pos.left);
// console.log("pos.top: " + pos.top);

// });

// });

$(function() {
	var section = $("#s1");
	var xInput = section.find(".x-input");
	var span = section.find("span");
	var submitButton = section.find("input[type='submit']");
	var inner = section.find(".inner");

	span.addClass("span-style");

	submitButton.click(function() {

		// ajax()는 자동으로 설정된 것들을 커스텀하게 옵션을 수정할 수 있는 함수
		// 래퍼런스를 보고 필요한 기능을 변경하여 사용한다.
		$.ajax("/notice/reg", {
			/* 동기형으로 한다면 */
			async : false
		});

		// ----------------4------------------------------------

		/* [1] get - 문자열 받기 */
		// $.get("/data", function(data) {
		// console.log(data);
		// });
		/* [2] get - 스크립트 받기 */
		// $.getScript("/data", function(data) {
		// console.log(data);
		// });
		/* [3] get - JSON 받기 */
		// $.getJSON("/data", function(data) {
		// console.log(data.title);
		// });
		/* [4] get - 페이지 받기 */
		// inner.load("/notice/list");
		/* [1] post - 페이지 받기 */
		// console.log(inner.serialize());
		// $.post("/notice/reg", inner.serialize());
		$.post("/notice/reg", {
			title : "제제제제",
			content : "hohoho"
		});

		// ----------------3------------------------------------

		/*
		 * var span = $("<span>"); span.text("hello");
		 */

		/*
		 * $("<span>hello</span>"); inner .append($("<span>hello</span>"));
		 */

		// $("<span>hello</span>")
		// .appendTo(inner);
		// $("<span>hello</span")
		// .text("hahaha")
		// .appendTo(inner);
		// inner.after(inner.clone());
		// inner.empty();
		// ----------------2------------------------------------
		// inner.css({
		// left: "200px"
		// });
		// inner.animate({
		// left: "200px",
		// height: "200px"
		// }, 3000); /* 기본값 400ms */
		// inner.animate({
		// left: "200px",
		// }, 3000);
		// inner.animate({
		// height: "200px"
		// }, 3000);
		// inner.animate({
		// left: "200px",
		// }, 3000, function () {
		// inner.animate({ opacity: 0 })
		// })
		// .delay(1000)
		// .animate({
		// height: "200px"
		// }, 1000);
		// inner.animate({
		// left: "200px",
		// }, 3000, function () {
		// inner.animate({ opacity: 0 })
		// .animate({
		// height: "200px"
		// }, 1000);
		// })
		// span.animate({ fontSize: "50px" });
		/* background는 animate 안됨 */

		// window.setTimeout(function () {
		// console.log("알람");
		// }, 300); /* 1회 ex) 3시간 후에 */
		// var i = 0;
		// var timerId = window.setInterval(function () {
		// var height = parseInt(inner.css("height"))
		// height = (height + 2) + "px";
		// inner.css({
		// height: height
		// });
		// if (height > 300) {
		// clearInterval(timerId);
		// }
		// }, 50); /* 주기적 반복 ex) 매일, 매시간마다 등 */
		// inner
		// .hide(400)
		// .show(400)
		// .slideUp(1000)
		// .slideDown(1000);
		// setInterval(function () {
		// var ar = inner.queue("fx");
		// console.log(ar.length);
		// }, 300);
		// inner
		// // .stop()
		// .clearQueue("fx")
		// .animate({
		// height: "100px"
		// }, 1000)
		// .animate({
		// left: "200px"
		// });
		inner.next().css({
			background : "green"
		});

		// inner
		// .children()
		// .first()
		// .next()
		// .css({ background: "blue" });

		// inner
		// .find("span:nth-child(2)")
		// .css({ background: "blue" });

		/* find는 자기 자손들 중에서 */

		inner.find("span").eq(1).css({
			background : "blue"
		});

		/* filter, eq는 갖고 있는 것들 중에서 */

		inner.find("span").even().css({
			background : "yellowgreen"
		}).odd().css({
			background : "black"
		});

		/* odd, even은 갖고 있는 것들 중에서 ~ */

		var spans = inner.find("span");
		for (var i = 0; i < spans.length; i++) {
			spans.eq(i).css({
				color : "grey"
			});
		}
		// spans.each(function (idx) {
		// console.log(this);
		// console.log($(this).text());
		// })

		// ---------------1------------------------------------

		// var offset = span.offset();
		// var pos = span.position();
		// / 너비 위치
		// console.log(offset.left + ", " + offset.top);
		// console.log(pos.left + ", " + pos.top);

		// if(!span.hasClass("active"))
		// span.addClass("active");
		// else
		// span.removeClass("active");
	});
	// xInput.get(0).value = "3";
	// xInput.val("50");
	// xInput.attr("value", "40");
	// span.html("<b>hello</b>");
	// span.text("<b>hello</b>");
	// span.css("color","blue");
	// span.css("font-size","30px");
	// span.css({
	// color:"blue",
	// fontSize:"30px"
	// })

	// span
	// .css({
	// color:"blue",
	// "font-size":"30px"
	// })
	// .css({
	// marginLeft:"200px"
	// });

});
