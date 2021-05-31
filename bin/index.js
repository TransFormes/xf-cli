#!/usr/bin/env node

import fs from 'fs'
import commander from 'commander'
import chalk from 'chalk'
import inquirer from 'inquirer'
import logSymbols from 'log-symbols'
import selectFrameWork from './lib/selectFramework.js'
import selectVue from './lib/vue.js'
import selectFlutter from './lib/flutter.js'
import selectReact from './lib/react.js'

commander
.version("1.0.0", "-v, --version")
.command('create <name>').description('请初始化项目').action(async(name, desc) => {
    if(fs.existsSync(name)){
        console.log(logSymbols.error,`${name} is exits`)
        const res = await inquirer.prompt([{
            type: 'confirm',
            message: '文件夹已存在，是否覆盖当前文件夹',
            name: 'replace'
        }]);
        if(res.replace){
            fs.rmdirSync(name)
        }
    }
    const frameWork = await selectFrameWork();
        switch (frameWork.frameWork){
            case 'Vue':
                selectVue(name);
                break;
            case 'Flutter':
                selectFlutter();
                break;
            case 'React':
                selectReact();
                break;
        }
})






commander.parse(process.argv) 