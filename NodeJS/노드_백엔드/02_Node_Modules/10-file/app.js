const fs = require('fs');

// API의 3가지 형태
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { }  <- 이건 사용하지 않는 것이 좋다
// promises.rename().then().catch(0)

try {
    fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
    console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
    console.log(error);
});

console.log('hello');

fs.promises
    .rename('./text2.txt', './text-new.txt')  //
    .then(() => console.log('Done!'))
    .catch(console.error);