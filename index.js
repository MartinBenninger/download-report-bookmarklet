(function () {
	var viewFrame = document.getElementById('view-frame');

	if (viewFrame && viewFrame.contentDocument) {
		var svgElems = viewFrame.contentDocument.getElementsByTagName('svg');

		if (svgElems && svgElems.length) {
			var svg = svgElems[0];
			inlineComputedStyles(svg, { recursive: true });
			saveSvg(svg, "report_" + new Date().toISOString() + ".svg");

			alert("Done");
		} else {
			error();
		}
	} else {
		error();
	}

	function error() {
		alert("Couldn't find the report svg.");
	}

	function inlineComputedStyles(element, options = {}) {
		if (!element) {
			throw new Error("No element specified.");
		}

		if (options.recursive) {
			Array.prototype.forEach.call(element.children, child => {
				inlineComputedStyles(child, options);
			});
		}

		const computedStyles = getComputedStyle(element);

		Array.prototype.forEach.call(options.properties || computedStyles, property => {
			element.style[property] = computedStyles.getPropertyValue(property);
		});
	}


	function saveSvg(svgEl, name) {
		svgEl.setAttribute("xmlns", "http://www.w3.org/2000/svg");
		const svgData = svgEl.outerHTML;
		const preface = '<?xml version="1.0" standalone="no"?>\r\n';
		const svgBlob = new Blob([preface, svgData], {type:"image/svg+xml;charset=utf-8"});
		const downloadLink = document.createElement("a");
		downloadLink.href = URL.createObjectURL(svgBlob);
		downloadLink.download = name;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	}
})();