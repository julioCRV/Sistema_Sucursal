const { app, BrowserWindow } = require('electron');
const path = require('path');

// 👇 Agrega esto
const remoteMain = require('@electron/remote/main');
remoteMain.initialize();

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      enableRemoteModule: true, // 👈 Necesario
    },
  });

  // 👇 Habilita el remote para esta ventana
  remoteMain.enable(win.webContents);

  win.loadURL('http://localhost:3000');
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
