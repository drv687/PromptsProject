const electron = require('electron')
const {app, BrowserWindow} = electron

var win = null; 

app.on('window-all-closed', function(){
	if(process.platform !='darwin'){
		app.quit();
	}
});
//Create browser windows. 
app.on("ready", function() {
	win = new BrowserWindow({width:800, height:600});
	win.loadURL('file://' +__dirname +'/index.html');
	win.on('closed', function(){
	win = null;
	});
});