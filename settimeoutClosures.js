//created a func with 1000 milli sec=>i sec timer
function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

x();

//it pritns value of i after one sec.
