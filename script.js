document.getElementById('tip').disabled=true;
document.getElementById('total').disabled=true;

document.getElementById('calculate').onclick=function(){
     calc();
}

document.getElementById('ptip').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   calc();
  }
});

document.getElementById('bill').addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   calc();
  }
});

function calc(){
    var bill = document.getElementById('bill').value;
    var ptip = document.getElementById('ptip').value;
    
    var tip = (ptip*bill)/100;
    document.getElementById('tip').value= tip;
    
    var total = parseFloat(bill)+parseFloat(tip);
    document.getElementById('total').value= total;
}