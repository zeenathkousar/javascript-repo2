//created a func with 1000 milli sec=>i sec timer
function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

x();

//it pritns value of i after one sec.
//IF WE GIVE  3000 milli secs, it prints after 3secs

function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 1000);
  console.log("namaste js");
}

x();

//the above code will first prints 'namaste js' then after 1 sec  and print i
