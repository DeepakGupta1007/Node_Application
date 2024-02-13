//Exploring os module.


//Template string ES6/ES2015: ECMA Script 6

const os = require('os');

console.log(os.freemem());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.platform());
console.log(os.version());
console.log(os.cpus());
console.log(os.type());
console.log(os.release());



/*
712531968
DESKTOP-7M9HL2F
4194443264
win32
Windows 10 Pro
[
  {
    model: 'Intel(R) Core(TM) i3-4030U CPU @ 1.90GHz',
    speed: 1896,
    times: {
      user: 4634671,
      nice: 0,
      sys: 2481328,
      idle: 31888296,
      irq: 265265
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-4030U CPU @ 1.90GHz',
    speed: 1896,
    times: {
      user: 4794953,
      nice: 0,
      sys: 2019828,
      idle: 32189312,
      irq: 87218
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-4030U CPU @ 1.90GHz',
    speed: 1896,
    times: {
      user: 5091875,
      nice: 0,
      sys: 2155609,
      idle: 31756609,
      irq: 37968
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-4030U CPU @ 1.90GHz',
    speed: 1896,
    times: {
      user: 4931687,
      nice: 0,
      sys: 1859265,
      idle: 32213156,
      irq: 34703
    }
  }
]
Windows_NT
10.0.10240
*/

console.log(`Total Memory:${os.totalmem}`); //New way of appending string in ES6
