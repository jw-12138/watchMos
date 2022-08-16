const find = require('find-process')
const exec = require('child_process').exec

let pList = []

function watch(){
  find('name', 'Mos.app')
  .then((list) => {
    pList = list
    console.log(pList)
    confirm()
  }, (err) => {
    console.log(err.stack || err)
  })
}

function open(){
  exec('open -a Mos', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
  })
}

function confirm(){
  if(pList.length === 0){
    open()
  }
}

watch()
setInterval(watch, 5000)
