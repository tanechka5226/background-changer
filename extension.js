const vscode = require('vscode');

function activate(context) {
    console.log('Background Changer plugin is now active');
    
    let disposable = vscode.commands.registerCommand('backgroundChanger.changeBackground', function () {
        vscode.window.showInformationMessage('Фон изменен');
    });

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};