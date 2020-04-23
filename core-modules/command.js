var arg = process.argv.slice(2);
const sum = arg.reduce((acc, val)=> acc +parseInt(val),0);

console.log(sum);