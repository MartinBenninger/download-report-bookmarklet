# download-report-bookmarklet
A small bookmarklet for downloading reports from Jazz Report Builder as SVG files.

This will create an SVG file with the report looking exactly as it does in the browser. Report builder has the option to export as an SVG file but it doesn't look exactly the same. For example, the text size is much smaller in the exported SVG file created by report builder.

## Usage
- Drag this bookmarklet << Download Report >> into the bookmarks bar.
- Open a report in report builder and run it.
- When the report is loaded, click the "Download Report" bookmark.
- Within seconds, the report should automatically download as an SVG file.

## Editing
If you would like to customize the bookmarklet you can clone this repository or just download the [index.js] file.

Make the changes that you want to the JavaScript code and save the file. Then follow the instructions below to create a bookmarklet.

### Create Bookmarklet
- Install node-minify globally using the two commands below (requires node and npm to be installed)
  - `npm install -g @node-minify/cli`
  - `npm install -g @node-minify/terser`
- Run node-minify with the following command from the directory containing [index.js]
  - `node-minify --compressor terser --input index.js --output index.min.js`
- Open `index.min.js` and copy the contents
- Go to Chrome and right click on the bookmarks bar -> Add Page...
- Give it a name e.g. 'Download Report'
- In the URL input type `javascript:` and then paste the contents of `index.min.js`
- Save the bookmark