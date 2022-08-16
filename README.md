# watchMos
a script that re-opens Mos when it got crashed.   

一个 [Mos.app](https://github.com/Caldis/Mos) 的监控脚本。


## how to use 如何使用

1. install [nvm](https://github.com/nvm-sh/nvm)  
   安装nvm

2. open Terminal.app and use nvm to install NodeJS  
   打开mac上的终端，使用nvm安装NodeJS

```bash
nvm install 18
```

3. clone this repo and run `npm i` in the project root path  
   克隆这个项目，并在项目目录下运行`npm i`以安装依赖

4. use npm to install [pm2](https://www.npmjs.com/package/pm2)  
   使用npm安装pm2

```bash
npm i pm2 -g
```

5. use pm2 to run this script so you don't have to keep the terminal opened  
   如果你不想一直开着终端，可以使用pm2运行此脚本

```bash
pm2 start ./main.js
```

