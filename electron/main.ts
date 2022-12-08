import { app, BrowserWindow, ipcMain, IpcMainEvent, Menu } from 'electron';

import AppWindow from './AppWindow';

export let appWindow = new AppWindow();

app.whenReady().then(() => {
  appWindow.registerIPCHooks();
  appWindow.createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) appWindow.createWindow();
  })
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});