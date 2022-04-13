let beepTiming = process.argv.slice(2).sort((a,b)=>a - b);

const timer = function(beepTiming) {
  
  for (let i = 0; i < beepTiming.length; i ++) {
    if (isNaN(beepTiming[i]) || beepTiming[i] < 0 || beepTiming[i] === null) {
      return;

    } else {
      setTimeout(()=>{
        process.stdout.write('.');
      }, Number(beepTiming[i]) * 1000);
    }
  }
};

timer(beepTiming);