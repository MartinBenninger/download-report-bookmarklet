# download-report-bookmarklet
A small bookmarklet for downloading reports from Jazz Report Builder as SVG files.

This will create an SVG file with the report looking exactly as it does in the browser. Report builder has the option to export as an SVG file but it doesn't look exactly the same. For example, the text size is much smaller in the exported SVG file created by report builder.

## Usage
- Drag this bookmarklet [Download Report](javascript:!function(){var e=document.getElementById("view-frame");if(e&&e.contentDocument){var t=e.contentDocument.getElementsByTagName("svg");if(t&&t.length){var o=t[0];!function e(t,o={}){if(!t)throw new Error("No element specified.");o.recursive&&Array.prototype.forEach.call(t.children,t=>{e(t,o)});const r=getComputedStyle(t);Array.prototype.forEach.call(o.properties||r,e=>{t.style[e]=r.getPropertyValue(e)})}(o,{recursive:!0}),function(e,t){e.setAttribute("xmlns","http://www.w3.org/2000/svg");const o=e.outerHTML,r=new Blob(['<?xml version="1.0" standalone="no"?>\r\n',o],{type:"image/svg+xml;charset=utf-8"}),n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)}(o,"report_"+(new Date).toISOString()+".svg"),alert("Done")}else r()}else r();function r(){alert("Couldn't find the report svg.")}}();) into the bookmarks bar.
- Open a report in report builder and run it.
- When the report is loaded, click the "Download Report" bookmark.
- Within seconds, the report should automatically download as an SVG file.

## Editing
If you would like to customize the bookmarklet you can clone this repository or just download the [index.js](index.js) file.

Make the changes that you want to the JavaScript code and save the file. Then follow the instructions below to create a bookmarklet.

### Create Bookmarklet
- Install node-minify globally using the two commands below (requires node and npm to be installed)
  - `npm install -g @node-minify/cli`
  - `npm install -g @node-minify/terser`
- Run node-minify with the following command from the directory containing [index.js](index.js)
  - `node-minify --compressor terser --input index.js --output index.min.js`
- Open `index.min.js` and copy the contents
- Go to Chrome and right click on the bookmarks bar -> Add Page...
- Give it a name e.g. 'Download Report'
- In the URL input type `javascript:` and then paste the contents of `index.min.js`
- Save the bookmark
