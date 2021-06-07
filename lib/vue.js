//about vue
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs-extra')
const { downloadFn } = require('./download');
const chalk = require('chalk');
const { selectTemplate, enterAuthor, vueVersion } = require('./prompt')


module.exports = {
    async selectVue(name){
        const { vue } = await vueVersion();
        if(vue === 'vue3'){
            const { temp } = await selectTemplate();
            const { author } = await enterAuthor();
            let url = '';
            if(temp === 'admin'){
                url = 'https://github.com:TransFormes/vueAdmin#main';
            } else {
                url = 'https://github.com:TransFormes/customTemplate#main';
            }
            const downloadRes = await downloadFn(url, name);
            if(downloadRes){
                const filePath = path.resolve(__dirname,`../${name}/package.json`)
                if(filePath){
                    const res = JSON.parse((await fs.readFile(filePath)).toString());
                    if(res){
                        res['author'] = author;
                        res['name'] = name;
                        await fs.writeFile(filePath, JSON.stringify(res, null, 4))
                    }
                }
                console.log(`    cd ${name}`);
                console.log('    npm install');
                console.log(`    npm run ${temp === 'admin' ? 'serve': 'dev'}`);
            }
        } else {
            console.log(chalk.red('请使用vue3 template'));
            // const temp = await selectTemplate();
        }
    }
}

