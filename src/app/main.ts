import { app, BrowserWindow } from 'electron';
declare var __dirname: string;
let mainWindow: Electron.BrowserWindow;

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		minHeight: 400,
		title: 'LifDex',
		show: false,
		frame: false,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	if (process.env.NODE_ENV === 'development') {
		mainWindow.loadURL('http://localhost:3000/');
	} else {
		mainWindow.loadFile('index.html');
	}

	mainWindow.on('ready-to-show', mainWindow.show);
	mainWindow.on('closed', () => { mainWindow = null; });
};

app.on('ready', createWindow);


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
