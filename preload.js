const screenshot = require('screenshot-desktop');
const fs = require('fs');

const dateNew = new Date();
const time = `${dateNew.getHours()}.${dateNew.getMinutes()}.${dateNew.getSeconds()}`
const date = (`0 ${dateNew.getDate()}`).slice(-2);
const month = (`0 ${dateNew.getMonth() + 1}`).slice(-2);
const year = dateNew.getFullYear();

const imageName = `NewImage_${date}_${month}_${year}_${time}.jpg`

console.log("Here in Preload.js")
window.addEventListener('DOMContentLoaded',()=>{
    setInterval(() => {
        screenshot({ filename: imageName }).then((imgPath) => {
            console.log(`FileName is ${imageName} FilePath is ${imgPath}`)
        });
        console.log("Screenshot done, now writing details in a file")
    }, 2000);
    fs.appendFile('ImageLists.txt', `${imageName}\r\n`, (err) => {
        console.log(`imageName => ${imageName}`)
        if (err) throw err;
    })
})
