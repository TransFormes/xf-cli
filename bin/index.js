#!/usr/bin/env node

const fs = require('fs-extra')
const commander = require('commander')
const inquirer = require('inquirer')
// const logSymbols = require('log-symbols')
const { selectFrameWork } = require('../lib/selectFramework.js')
const { selectVue } = require('../lib/vue.js')
const { selectFlutter } = require('../lib/flutter.js')
const { selectReact } = require('../lib/react.js')
const path = require('path')

// import fs from 'fs-extra'
// import commander from 'commander'
// import inquirer from 'inquirer'
// import logSymbols from 'log-symbols'
// import selectFrameWork from '../lib/selectFramework.js'
// import selectVue from '../lib/vue.js'
// import selectFlutter from '../lib/flutter.js'
// import selectReact from '../lib/react.js'
// import pck from './../package.json'
const pck = require('./../package.json')

commander
.version(pck.version, "-v, --version", 'verion')
.command('create <name>').description('初始化项目').action(async(name, desc) => {
    if(fs.existsSync(name)){
        const res = await inquirer.prompt([{
            type: 'confirm',
            message: '文件夹已存在，是否覆盖当前文件夹',
            name: 'replace'
        }]);
        if(res.replace){
            await fs.remove(`${name}`)
        }else {
            process.exit(1)
        }
    }
    const { frameWork } = await selectFrameWork();
    switch (frameWork){
        case 'Vue':
            selectVue(name);
            break;
        case 'Flutter':
            selectFlutter(name);
            break;
        case 'React':
            selectReact(name);
            break;
    }
})

commander.parse(process.argv) 