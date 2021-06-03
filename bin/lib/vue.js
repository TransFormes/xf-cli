//about vue
import inquirer from 'inquirer';
import logSymbols from 'log-symbols';
import chalk from 'chalk';
import download from './download.js'

export default async function selectVue(name){
    const vueVersion = await inquirer.prompt([
        {
            name: 'vueVersion',
            message: 'select vue version',
            type: 'list',
            choices: ['vue2', 'vue3']
        }
    ]);
    if(vueVersion.vueVersion === 'vue3'){
        const temp = await selectTemplate();
        if(temp.temp === 'admin'){
            const res = await download('github:TransFormes/vueAdmin#master', name);
            if(res){
                console.log(`cd ${name}`);
                console.log('npm install');
                console.log('npm run serve');
            }
        } else {

        }
    } else {
        const temp = await selectTemplate();
        console.log(temp.temp);
    }
}


async function selectTemplate(){
    return inquirer.prompt([{
        type: 'list',
        message: '选择模板 custom/admin',
        name: 'temp',
        choices: ['custom', 'admin']
    }])
}