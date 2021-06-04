import inquirer from 'inquirer';


export default async function selectFrameWork(){
    return inquirer.prompt([
        {
            type: 'list',
            name: 'frameWork',
            message: 'select your frameWork',
            choices: ['React', 'Vue', 'Flutter']
        }
    ])
}