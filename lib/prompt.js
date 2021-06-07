const inquirer = require('inquirer')

module.exports = {
    async selectTemplate(){
        return inquirer.prompt([{
            type: 'list',
            message: '选择模板 custom/admin',
            name: 'temp',
            choices: ['custom', 'admin']
        }])
    },
    async enterAuthor(){
        return inquirer.prompt([{
            type: 'input',
            name: 'author',
            message: 'enter author',
            default: 'author'
        }])
    },
    async vueVersion(){
        return inquirer.prompt([{
            name: 'vue',
            message: 'select vue version',
            type: 'list',
            choices: ['vue2', 'vue3']
        }])
    },
}
