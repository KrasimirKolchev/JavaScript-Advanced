function mySolution(){
	const IMG_SOURCE = "./images/user.png";
	const USER = 'Anonymous';

	let inputSection = document.getElementById('inputSection');
	let btnSend = inputSection.getElementsByTagName('button')[0];
	let openQuestions = document.getElementById('openQuestions');

	btnSend.addEventListener('click', addPending);

	function addPending(prev) {
		prev.preventDefault();

		let div = createContent();
		let divToSend = createContent();

		let div2 = creator('div');
		div2.classList = 'actions';
		let btnArchive = creator('button');
		btnArchive.classList = 'archive';
		btnArchive.textContent = 'Archive';
		btnArchive.addEventListener('click', function () {
			document.getElementById('pendingQuestions').removeChild(div);
		});
		let btnOpen = creator('button');
		btnOpen.classList.add('open');
		btnOpen.textContent = 'Open';
		btnOpen.addEventListener('click', function () {
			addOpen(divToSend);
			document.getElementById('pendingQuestions').removeChild(div);
		});

		div2.appendChild(btnArchive);
		div2.appendChild(btnOpen);
		div.appendChild(div2);
		document.getElementById('pendingQuestions').appendChild(div);

		document.getElementsByTagName('textarea')[0].value = "";
		inputSection.getElementsByTagName('input')[0].value = "";
	}

	function addOpen(d) {
		let div = d;
		div.classList = 'openQuestion';
		let divAct = creator('div');
		divAct.classList = 'actions';
		let btnReply = creator('button');
		btnReply.classList = 'reply';
		btnReply.textContent = 'Reply';
		btnReply.addEventListener('click', function () {

			if (btnReply.textContent === 'Reply') {
				document.getElementsByClassName('replySection')[0].style.display = 'block';
				btnReply.textContent = 'Back';
			} else if (btnReply.textContent === 'Back') {
				document.getElementsByClassName('replySection')[0].style.display = 'none';
				btnReply.textContent = 'Reply';
			}


		});

		divAct.appendChild(btnReply);
		div.appendChild(divAct);

		let divRepSec = creator('div');
		divRepSec.classList = 'replySection';
		divRepSec.style.display = 'none';
		let input = creator('input');
		input.classList = 'replyInput';
		input.type = 'text';
		input.placeholder = 'Reply to this question here...';
		divRepSec.appendChild(input);
		let btnReplySend = creator('button');
		btnReplySend.classList = 'replyButton';
		btnReplySend.textContent = 'Send';
		btnReplySend.addEventListener('click', function () {
			let li = creator('li');
			let text = btnReplySend.previousElementSibling.value;

			if (text.trim().length > 0) {
				li.textContent = text;
				btnReplySend.nextElementSibling.appendChild(li);
			}

			btnReplySend.previousElementSibling.value = '';
		});

		divRepSec.appendChild(btnReplySend);

		let ol = creator('ol');
		ol.classList = 'reply';
		ol.type = '1';
		divRepSec.appendChild(ol);
		div.appendChild(divRepSec);
		openQuestions.appendChild(div);

	}

	function createContent() {
		let textField = document.getElementsByTagName('textarea')[0].value;
		let userField = inputSection.getElementsByTagName('input')[0].value;

		if (textField.trim().length === 0) {
			return;
		}

		let div = creator('div');
		div.classList = 'pendingQuestion';
		let img = creator('img');
		img.src = IMG_SOURCE;
		img.width = '32';
		img.height = '32';
		div.appendChild(img);
		let span = creator('span');
		if (userField.trim().length === 0) {
			span.innerHTML = USER;
		} else {
			span.innerHTML = userField;
		}

		div.appendChild(span);
		let p = creator('p');
		p.textContent = textField;
		div.appendChild(p);

		return div;
	}

	function creator(el) {
		return document.createElement(el);
	}
}
