import download from 'download-git-repo'
import ora from 'ora'
import logSymbols from 'log-symbols'
import chalk from 'chalk'

export default function downloadFn(url, name){
    return new Promise((resolve, reject) => {
        const spinner = ora('正在下载模板...')
        spinner.start();
        download(url,name, {clone: true}, err => {
            if(!err){
                spinner.succeed();
                console.log(logSymbols.success, '模板初始化完成');
                resolve(true)
            } else {
                spinner.fail();
                console.log(logSymbols.error, chalk.red(err));
                reject(err);
            }
        })
    })
}