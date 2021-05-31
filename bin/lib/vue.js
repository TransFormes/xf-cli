//about vue
import inquirer from 'inquirer';
import download from 'download-git-repo'
import ora from 'ora';
import logSymbols from 'log-symbols';
import chalk from 'chalk';

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
        console.log(name);
        if(temp.temp === 'admin'){
            const spinner = ora('正在下载模板...')
            spinner.start();
            // nodegit.Clone('https://github.com/TransFormes/xf-cli.git#master', __filename).then(res => {
            //     console.log(res);
            // })
            download('https://gitee.com:huruilin/vue-vant-c#master',name, {clone: true}, err => {
                if(!err){
                    spinner.succeed();
                    console.log(logSymbols.success, '模板初始化完成');
                } else {
                    spinner.fail();
                    console.log(logSymbols.error, chalk.red(err));
                }
            })
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