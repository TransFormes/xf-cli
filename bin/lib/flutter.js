import logSymbols from 'log-symbols';
import downloadFn from './download.js'
import chalk from 'chalk';


export default async function selectFlutter(name){
    console.log('👉', chalk.green('请查看pubspec.yaml里面的插件是否是最新版本'));
    const res = await downloadFn('https://github.com:TransFormes/vueAdmin#main', name);
    console.log(res);
}