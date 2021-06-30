const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
	accordionItemHeader.addEventListener("click", event => {
		accordionItemHeader.classList.toggle("active");
		const accordionItemBody = accordionItemHeader.nextElementSibling;
		if(accordionItemHeader.classList.contains("active")) {
			accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
		}
		else {
			accordionItemBody.style.maxHeight = 0;
		}
	});
}); 

var name2 = document.getElementById("name");
var date = document.getElementById("date");
var comment = document.getElementById("bodyText");
var button = document.getElementById("addComment");
var panel = document.getElementById("comment-text");

button.onclick = function () {
	const newElement = document.createElement("div");
	newElement.classList.add("comment");
	newElement.innerHTML = `<div class="name">
	${name2.value}
	</div>
	<div class="date">
	${date.value}
	</div>
	<p>${comment.value}</p>`
	panel.insertBefore(newElement, panel.firstElementChild);
	name2.value = " ";
	date.value = " ";
	comment.value= " ";
}

function Italy() {
	window.location="rome.html";
}

var user = document.querySelector('#user');
user.addEventListener('keyup', function(){
	var u_times = document.querySelector('.u_times');
	var u_check = document.querySelector('.u_check');
	if(user.value.length == 0 || user.value.length < 6) {
		user.style.border = '2px solid red';
		u_times.style.display = 'block';
		u_check.style.display = 'none';
		return false;
	} else {
		user.style.border = '2px solid green';
		u_times.style.display = 'none';
		u_check.style.display = 'block';
	}
})

var pass = document.querySelector('#password');
pass.addEventListener('keyup', function(){
	var p_times = document.querySelector('.p_times');
	var p_check = document.querySelector('.p_check');
	if(pass.value.length == 0 || pass.value.length < 8) {
		pass.style.border = '2px solid red';
		p_times.style.display = 'block';
		p_check.style.display = 'none';
		return false;
	} else {
		pass.style.border = '2px solid green';
		p_times.style.display = 'none';
		p_check.style.display = 'block';
	}
})

function validate() {
	if(user.value == 0 || user.value.length < 6) {
		document.getElementById('error').innerHTML = 'Моля, попълнете всички полета!';
		return false;
	} else if (pass.value == 0|| pass.value.length < 8) {
		document.getElementById('error').innerHTML = 'Моля, попълнете всички полета!';
		return false;
	} else {
		alert('Регистрирахте се успешно!');
	}
}
