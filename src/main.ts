import { app, BrowserWindow } from 'electron'
declare var __dirname: string
let mainWindow: Electron.BrowserWindow

function onReady() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  })

  const fileName: string = `file://${__dirname}/index.html`;
  mainWindow.loadURL(fileName);
  mainWindow.on('close', () => app.quit());

  document.getElementsByTagName('body')[0].innerHTML = `node Version: ${process.versions.node}`
}

app.on('ready', () => onReady());
app.on('window-all-closed', () => app.quit());
console.log(`Electron Version ${app.getVersion()}`);