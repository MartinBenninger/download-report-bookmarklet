# download-report-bookmarklet
A small bookmarklet for downloading reports from Jazz Report Builder as SVG files.

This will create an SVG file with the report looking exactly as it does in the browser. Report builder has the option to export as an SVG file but it doesn't look exactly the same. For example, the text size is much smaller in the exported SVG file created by report builder.

## Usage
- Drag this bookmarklet [Download Report](javascript:!function()%7Bvar%20e=document.getElementById(%22view-frame%22);if(e&&e.contentDocument)%7Bvar%20t=e.contentDocument.getElementsByTagName(%22svg%22);if(t&&t.length)%7Bvar%20o=t%5B0%5D;!function%20e(t,o=%7B%7D)%7Bif(!t)throw%20new%20Error(%22No%20element%20specified.%22);o.recursive&&Array.prototype.forEach.call(t.children,t=%3E%7Be(t,o)%7D);const%20r=getComputedStyle(t);Array.prototype.forEach.call(o.properties%7C%7Cr,e=%3E%7Bt.style%5Be%5D=r.getPropertyValue(e)%7D)%7D(o,%7Brecursive:!0%7D),function(e,t)%7Be.setAttribute(%22xmlns%22,%22http://www.w3.org/2000/svg%22);const%20o=e.outerHTML,r=new%20Blob(%5B%22%3C?xml%20version='1.0'%20standalone='no'?%3E%22,o%5D,%7Btype:%22image/svg+xml;charset=utf-8%22%7D),n=document.createElement(%22a%22);n.href=URL.createObjectURL(r),n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n)%7D(o,%22report_%22+(new%20Date).toISOString()+%22.svg%22),alert(%22Done%22)%7Delse%20r()%7Delse%20r();function%20r()%7Balert(%22Couldn't%20find%20the%20report%20svg.%22)%7D%7D();) into the bookmarks bar.
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

Note: If you want to create a link on a webpage, be sure to first encode the JavaScript with ``encodeURI(`code`)``.
