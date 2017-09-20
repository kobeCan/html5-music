import "./css/style.scss";

import Music from './js/music';

const music = new Music({
	canvas: 'can',
	width: 800,
	height: 300
});
// 表单选择文件
chooseFile('selectBtn', 'formFile', files => {
	music.setFiles(files);
});

// 拖拽文件
dragFile('dragContainer', {
	dragenter: function () {
		
	},
	dragleave: function () {
		
	},
	dragover: function () {
		
	},
	drop: function (files) {
		music.setFiles(files);
	}
})




function chooseFile (btnId, inputId, callback) {
	let btnEl = document.getElementById(btnId);
	let fileEl = document.getElementById(inputId);

	btnEl.addEventListener('click', function () {
		fileEl.click();
	});
	fileEl.addEventListener('change', function (e) {
		// new Visualizer(e.target.files);
		callback && callback(e.target.files);
		e.target.value = '';
	});
}

function dragFile (containerId, events) {
	let dragEl = document.getElementById(containerId);
	let paragraph = dragEl.querySelector('p');
	dragEl.addEventListener('dragenter', function (e) {
		paragraph.textContent = `please drop`;
		events.dragenter && events.dragenter(e);
	});
	dragEl.addEventListener('dragover', function (e) {
		e.stopPropagation();
		e.preventDefault();
		e.dataTransfer.dropEffect = 'copy';
		paragraph.textContent = `please drop`;
		events.dragenter && events.dragenter(e);
	});

	dragEl.addEventListener('dragleave', function (e) {
		paragraph.textContent = 'please drag a song file into this rectangle';
		events.dragleave && events.dragleave(e);
	});

	dragEl.addEventListener('drop', function (e) {
		e.stopPropagation();
		e.preventDefault();
		paragraph.textContent = `You have added a song.`;
		events.drop && events.drop(e.dataTransfer.files);
	});
}