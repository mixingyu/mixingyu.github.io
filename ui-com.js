(function() {
	
	function loadCssCode(code){
	    var style = document.createElement('style');
	    style.type = 'text/css';
	    style.rel = 'stylesheet';
	    //for Chrome Firefox Opera Safari
	    style.appendChild(document.createTextNode(code));
	    //for IE
	    //style.styleSheet.cssText = code;
	    var head = document.getElementsByTagName('head')[0];
	    head.appendChild(style);
	}
	loadCssCode(`
		*[class*="_uitag"] {
			position: absolute;
			top: -22px;
			left: 0;
			height: 22px;
			padding: 0 4px;
			line-height: 22px;
			font-size: 14px;
			font-weight: bold;
			pointer-events: none;
			color: #fff;
			opacity: .8;
			z-index: 999999
		}
		
		#uTools {
			position: fixed;
			top: 50px;
			width: 240px;
			font-size: 12px;
			font-family: "宋体";
			border: 1px solid rgba(190,190,190,0.3);
			border-right: 0;
			color: #000;
			background-color: rgba(190,190,190,0.85);
			-webkit-border-top-left-radius: 6px;
			-webkit-border-bottom-left-radius: 6px;
			-moz-border-radius-topleft: 6px;
			-moz-border-radius-bottomleft: 6px;
			border-top-left-radius: 6px;
			border-bottom-left-radius: 6px;
			-webkit-user-select: none;
			user-select: none;
			z-index: 1000000;
			-webkit-transition: right 2s;
			transition: right 200ms
		}
			#uTools div {
				margin: 8px 0;
				padding: 0 6px;
				height: 20px;
				display: -webkit-flex;
				display: flex;
				-webkit-align-items: center;
				align-items: center
			}
				#uTools span {
					margin: 4px 0 0;
					padding: 2px 0;
					width: 100%;
					height: 20px;
					display: block;
					font-size: 18px;
					font-weight: bold;
					cursor: pointer;
					text-indent: 12px;
					background-color: rgba(0,0,0,0.1);
					transition: background-color 200ms;
				}
				#uTools span:hover {
					background-color: rgba(0,0,0,0.2);
				}
				#uTools [type=color] {
					margin-left: auto
				}
		
		.magic-checkbox {
			width: 18px;
			height: 18px;
			margin-right: 6px
		}
	`);

	document.getElementsByTagName("body")[0].innerHTML += `
		<div id="uTools"style="right:-210px;">
			<div>
				<input class="magic-checkbox" type="checkbox" id="tui-c1"><label for="tui-c1">所有UI组件</label><input id="tui-cl1"type="color"value="#FF0000"/>
			</div>
			<div>
				<input class="magic-checkbox" type="checkbox" id="tui-c2"><label for="tui-c2">所有UI组件-子元素</label><input id="tui-cl2"type="color"value="#0000FF"/>
			</div>
			<div>
				<input class="magic-checkbox" type="checkbox" id="tui-c3"><label for="tui-c3">所有UI组件-所有子元素</label><input id="tui-cl3"type="color"value="#2D9900"/>
			</div>
			<div>
				<input class="magic-checkbox" type="checkbox" id="tui-c4"><label for="tui-c4">隐藏同名组件</label>
			</div>
			<div>
				<input class="magic-checkbox" type="checkbox" id="tui-c5"><label for="tui-c5">隐藏同名子元素</label>
			</div>
			<span id="tui-open"><</span>
		</div>
	`;
	
	var uTools = document.getElementById("uTools");
	var open = document.getElementById("tui-open");
	open.onclick = function () {
		if (uTools.style.right == "-210px") {
			uTools.style.right = "0px";
			open.innerHTML = ">";
		}else{
			uTools.style.right = "-210px";
			open.innerHTML = "<";
		}
	}
	
	var tuiC1 = document.getElementById("tui-c1");
	var tuiCl1 = document.getElementById("tui-cl1");
	var tuiCl1Number = tuiCl1.value;
	
//	tuiC1.checked = true;
//	tuiC1f();
	
	function tuiC1f() {
    var tuiC1All = document.querySelectorAll("*[class*='UI-']");
		if(tuiC1.checked){
			for (var C1i=0;C1i<tuiC1All.length;C1i++) {
				tuiC1All[C1i].style.boxSizing = "border-box";
				tuiC1All[C1i].style.border = "1px solid " + tuiCl1Number;
				
				var styles = document.defaultView.getComputedStyle(tuiC1All[C1i]);
				if(styles.position != "absolute" && styles.position != "fixed"){
					tuiC1All[C1i].style.position = "relative";
				}
				var span = document.createElement("SPAN");
				var text = document.createTextNode(tuiC1All[C1i].className.split(" ", 1));
				span.className = tuiC1All[C1i].className.split(" ", 1) + "_uitag";
				span.style.backgroundColor = tuiCl1Number;
				span.style.width = "auto";
				span.style.height = "auto";
				span.style.minWidth = "initial";
				span.style.maxWidth = "initial";
				span.appendChild(text);
				tuiC1All[C1i].appendChild(span);
				//console.log(tuiC1All[C1i].className);
			}
		}else{
			var tuiC1delAll = document.querySelectorAll("*[class*='_uitag']");
			for (var C1ii=0;C1ii<tuiC1delAll.length;C1ii++) {
				tuiC1delAll[C1ii].remove();
			}
			for (var C1i=0;C1i<tuiC1All.length;C1i++) {
				tuiC1All[C1i].style.boxSizing = "";
				tuiC1All[C1i].style.border = "";
				tuiC1All[C1i].style.position = "";
			}
		}
	}
	
	tuiCl1.onchange = function () {
		tuiCl1Number = tuiCl1.value;
		
		if (tuiC1.checked === true) {
			tuiC1.checked = false
			tuiC1f();
			tuiC1.checked = true
			tuiC1f();
		}
	}

	tuiC1.onclick = function () {
		tuiC1f();
	}
	
	// ---------------------------------------------------------------------------
	
	var tuiC2 = document.getElementById("tui-c2");
	var tuiCl2 = document.getElementById("tui-cl2");
	var tuiCl2Number = tuiCl2.value;

	function tuiC2f() {
    var tuiC2All = document.querySelectorAll("*[class*='UI-'] *[class*='ui-']");
		if(tuiC2.checked){
			for (var C2i=0;C2i<tuiC2All.length;C2i++) {
				tuiC2All[C2i].style.boxSizing = "border-box";
				tuiC2All[C2i].style.border = "1px solid " + tuiCl2Number;
			}
		}else{
			for (var C2i=0;C2i<tuiC2All.length;C2i++) {
				tuiC2All[C2i].style.boxSizing = "";
				tuiC2All[C2i].style.border = "";
			}
		}
	}
	
	tuiCl2.onchange = function () {
		tuiCl2Number = tuiCl2.value;
		if (tuiC2.checked === true) {
			tuiC2.checked = false
			tuiC2f();
			tuiC2.checked = true
			tuiC2f();
		}
	}

	tuiC2.onclick = function () {
		tuiC2f();
	}
	
	// ---------------------------------------------------------------------------
	
	var tuiC3 = document.getElementById("tui-c3");
	var tuiCl3 = document.getElementById("tui-cl3");
	var tuiCl3Number = tuiCl3.value;
	
	function tuiC3f() {
    var tuiC3All = document.querySelectorAll("*[class*='UI-'] *");
		if(tuiC3.checked){
			for (var C3i=0;C3i<tuiC3All.length;C3i++) {
				tuiC3All[C3i].style.boxSizing = "border-box";
				tuiC3All[C3i].style.border = "1px solid " + tuiCl3Number;
			}
		}else{
			for (var C3i=0;C3i<tuiC3All.length;C3i++) {
				tuiC3All[C3i].style.boxSizing = "";
				tuiC3All[C3i].style.border = "";
			}
		}
	}
	
	tuiCl3.onchange = function () {
		tuiCl3Number = tuiCl3.value;
		if (tuiC3.checked === true) {
			tuiC3.checked = false
			tuiC3f();
			tuiC3.checked = true
			tuiC3f();
		}
	}

	tuiC3.onclick = function () {
		tuiC3f();
	}
	
	// ---------------------------------------------------------------------------
	
	var tuiC4 = document.getElementById("tui-c4");
	
	tuiC4.onclick = function () {
    var tuiC1All = document.querySelectorAll("*[class*='UI-']");
		var nameT = "";
		if(tuiC4.checked){
			for (var C4i=0;C4i<tuiC1All.length;C4i++) {
				if(nameT.indexOf("|" + tuiC1All[C4i].className) != -1){
					tuiC1All[C4i].style.display = "none";
				}else{
					nameT += "|" + tuiC1All[C4i].className;
				}
			}
			console.log(nameT);
		}else{
			for (var C4i=0;C4i<tuiC1All.length;C4i++) {
				tuiC1All[C4i].style.display = "";
			}
		}
	}
		
	// ---------------------------------------------------------------------------
	
	var tuiC5 = document.getElementById("tui-c5");
	
	tuiC5.onclick = function () {
    var tuiC1All = document.querySelectorAll("*[class*='ui-']");
		var nameT = "";
		if(tuiC5.checked){
			for (var C5i=0;C5i<tuiC1All.length;C5i++) {
				if(nameT.indexOf("|" + tuiC1All[C5i].className) != -1){
					tuiC1All[C5i].style.display = "none";
				}else{
					nameT += "|" + tuiC1All[C5i].className;
				}
			}
			console.log(nameT);
		}else{
			for (var C5i=0;C5i<tuiC1All.length;C5i++) {
				tuiC1All[C5i].style.display = "";
			}
		}
	}

})();