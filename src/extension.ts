import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Background Changer extension is now active!');

    let selectThemeCommand = vscode.commands.registerCommand('background-changer.selectImage', async () => {
        const theme = await vscode.window.showQuickPick([
            'Dark Blue Theme',
            'Warm Dark Theme', 
            'Cool Gray Theme',
            'Green Dark Theme'
        ], {
            placeHolder: 'Select a background theme'
        });

        if (theme) {
            let colors = {};
            switch (theme) {
                case 'Dark Blue Theme':
                    colors = {
                        'editor.background': '#1E1E2E',
                        'sideBar.background': '#191927'
                    };
                    break;
                case 'Warm Dark Theme':
                    colors = {
                        'editor.background': '#2D2A2E',
                        'sideBar.background': '#272429'
                    };
                    break;
                case 'Cool Gray Theme':
                    colors = {
                        'editor.background': '#2F2F2F', 
                        'sideBar.background': '#252525'
                    };
                    break;
                case 'Green Dark Theme':
                    colors = {
                        'editor.background': '#1E2A1E',
                        'sideBar.background': '#192019'
                    };
                    break;
            }

            await vscode.workspace.getConfiguration().update(
                'workbench.colorCustomizations',
                colors,
                vscode.ConfigurationTarget.Global
            );
            
            vscode.window.showInformationMessage(`Applied: ${theme}`);
        }
    });

    let resetCommand = vscode.commands.registerCommand('background-changer.resetBackground', async () => {
        await vscode.workspace.getConfiguration().update(
            'workbench.colorCustomizations',
            {},
            vscode.ConfigurationTarget.Global
        );
        vscode.window.showInformationMessage('Background colors reset to default!');
    });

    context.subscriptions.push(selectThemeCommand, resetCommand);
}

export function deactivate() {}