var colors = require('colors');

if(process.argv[2]){
    var input = process.argv[2];
    console.log('Yoloscript Compiler'.green);
    console.log(('Compiling ' + input).cyan);
}else{
    console.log('Error. No input files.'.red);
}
