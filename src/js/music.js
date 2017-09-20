const defaultOpt = {
	width: 800,
	height: 300
}

const Music = function (options) {
	this.options = options || defaultOpt;
	this._prepareAPI();
}

Music.prototype = {
	constructor: Music,
	_prepareAPI: function () {
		const AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
		try {
			this.audioCtx = new AudioContext();
		} catch (e) {
			console.error("The AudioContext Object is not supported in your browser!");
		}
	},
	setFiles: function (files) {
		if (files.length != 0) {
			let file = files[0];
			let fileName = file.name;

			let reader = new FileReader();
			reader.onload = (e) => {
				let fileRes = e.target.result;
				// 解码文件
				this.audioCtx.decodeAudioData(fileRes, (buffer) => {
					this._play(buffer);
				}, (e) => {
					console.log("文件解码失败！");
				})
			}
			reader.readAsArrayBuffer(file);
		}
	},
	_play: function (buffer) {
		var audioCtx = this.audioCtx;
		// 创建BufferSource
		var source = audioCtx.createBufferSource();
		// 创建分析器
		var analyser = audioCtx.createAnalyser();
		// 将分析器与BufferSource相连
		source.connect(analyser);
		//分析器与扬声器相连
		analyser.connect(audioCtx.destination);

		source.buffer = buffer;
		source.start(0);
		if (this.options.canvas) {
			this._drawSpectrum(analyser);
		}
	},
	_drawSpectrum: function (analyser) {
		let opts = this.options,
			can = document.getElementById(opts.canvas),
			ctx = can.getContext('2d'),
			canvasW = opts.width,
			canvasH = opts.height,
			lineNum = canvasW / 12; // 计算多少柱形
		
		can.width = canvasW;
		can.height = canvasH;

		let gradient = ctx.createLinearGradient(0, 0, 0, 300);
		gradient.addColorStop(1, '#0f0');
		gradient.addColorStop(0.5, '#ff0');
		gradient.addColorStop(0, '#f00');
		ctx.fillStyle = gradient;

		function draw () {
			var arr = new Uint8Array(analyser.frequencyBinCount);
			analyser.getByteFrequencyData(arr);
			var step = Math.floor(analyser.frequencyBinCount / lineNum);

			ctx.clearRect(0, 0, canvasW, canvasH);
			for (var i = 0; i < lineNum; i++) {
				var value = arr[i * step];
				ctx.fillRect(12 * i, canvasH - 5 - value, 10, canvasW);
			}
			requestAnimationFrame(draw);
		}
		draw();
	}
}

export default Music;