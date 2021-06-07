const download = require('download-git-repo')
const ora = require('ora')
const chalk = require('chalk')


module.exports = {
    downloadFn(url, name){
        return new Promise((resolve, reject) => {
            const spinner = ora('正在下载模板...')
            spinner.start();
            download(url,name, {clone: true}, err => {
                if(!err){
                    spinner.succeed();
                    console.log( chalk.green('模板初始化完成'));
                    resolve(true)
                } else {
                    spinner.fail();
                    console.log(err, chalk.red(err));
                    reject(err);
                }
            })
        })
    }
}