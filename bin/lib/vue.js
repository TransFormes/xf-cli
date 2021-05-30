//about vue
import inquirer from 'inquirer';

export default function selectVue(){
    inquirer.prompt([
        {
            name: 'vueVersion',
            message: 'select vue version',
            type: 'list',
            choices: ['vue2', 'vue3']
        }
    ]);
}