var mas=['Elem1','Elem2','Elem3','Elem4'];

$(document).ready(function(){

	// $('<div>').appendTo('body').text('divtext');
	// $('#div1').html('<span>span');

	// var span=$('#div1 span').text();
	// console.log(span);
	// $('#div1').text('my text');

	// $(A).append(B);
	// $(A).appendTo(B);

	// $('<p>').appendTo('#div1').text('textp');

	// $("<div id='mydiv'>").append("<p class='newp'>").appendTo("#div1");

	// $(".newp").after("div id='afterp'>");

	// $('<span>').text("newtext").insertAfter('.newp');

	// $("<input type='button'>").val('Click').appendTo('body');
	// $("input").click(function(){
	// 	alert($(this).val());
	// })

	$("<ul id='list'>").prependTo("body");
	for (var i = 0; i < mas.length; i++) {
		$("<li>").text(mas[i]).appendTo("#list")
	}

	$("<input id='txt'>").insertAfter("#list").after("<input type='button' value='Add'>");

	$("#txt+input").click(function(){

		var value=$("#txt").val();
		$("#txt").val("");
		if (value=="") {
			alert("Enter value!");
			return
		}

		var pos=mas.indexOf(value);
		if (pos >=0) {
			alert("Такий елем вже існує");
			return
		}

		mas.push(value);
		$("<li>").text(value).appendTo("#list");
	})

	$("#div1").wrap("<div class='class3'>");

	$(".class1").wrapAll("<div class='class4'></div>");

	$(".list1 li").wrapInner("<a href='#'>");

	$(".class5").empty().remove();

	$("h1").replaceWith("<h2>H2</h2>");
	$("<h4>").replaceAll("h3");
	$("h2").replaceWith("h4");


	var lis=$(".list1 li");
	console.log(lis);

	var lis1=$(".list11 li");
	console.log(lis1);
	if (lis1.length==0) {
		alert("Elem is not defined!");
	}

	$("#div1").css("background-color","red");
	$(".class1").css({
					backgroundColor:"red",
					fontWeight:"bold"
	})
	$("div").addClass("new").appendTo("body").click(function(){
		$(this).toggleClass("new").height(400).width(500).css("background-color","red")
	})

	$(".list1 li:first").css('color','red');
	$(".list1 li:even").css('color','red');


});