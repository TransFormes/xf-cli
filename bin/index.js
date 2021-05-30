#!/usr/bin/env node

import fs from 'fs'
import commander from 'commander'
import chalk from 'chalk'
import inquirer from 'inquirer'
import logSymbols from 'log-symbols'

commander.command('init <name>').description('请初始化项目').action((name, desc) => {
    if(fs.existsSync(name)){
        inquirer.prompt([{
            type: 'list',
            message: 'select your framework',
            choices: ['React', 'Vue', 'Flutter']
        }]).then(res => {
            console.log(res);
        })
    } else {
        console.log(logSymbols.error,`${name} is exits`)
        return;
    }
})

commander.parse(process.argv)