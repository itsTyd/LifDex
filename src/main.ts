import { app, BrowserWindow } from 'electron';
declare var __dirname: string;
let mainWindow: Electron.BrowserWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  if(process.env.NODE_ENV === "development") {
    mainWindow.loadFile("index.html");
  } else {
    mainWindow.loadURL("https://localhost:3000/");
  }

  mainWindow.on('closed', () => { mainWindow = null; });
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
