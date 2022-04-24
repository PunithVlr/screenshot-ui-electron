const { app, BrowserWindow, ipcMain } = require('electron');
const path = require("path");

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      devtools: false,
      preload: path.join(__dirname, "preload.js"),
    },
  })
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow();
  console.log("App launched")
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

