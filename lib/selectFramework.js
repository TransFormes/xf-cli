// import inquirer from 'inquirer';
const inquirer = require('inquirer')

module.exports = {
    selectFrameWork(){
        return inquirer.prompt([
            {
                type: 'list',
                name: 'frameWork',
                message: 'select your frameWork',
                choices: ['React', 'Vue', 'Flutter']
            }
        ])
    }
}