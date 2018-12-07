console.log('Hello world from Nodejs');

const tutorial = require('./tutorial')
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());
