for(var i = 1;i<37;i++){
  var parent = document.getElementById('room');
  var x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("id", i);
  parent.appendChild(x);
}
function randVal(){
  for(var i = 1;i<37;i++){
    var rand = Math.floor((Math.random() * 10) + i);
    var parent = document.getElementById(i);
    parent.setAttribute("value", rand);
    parent.style.background="gray"
  }
}
function clearVal(){
  for(var i = 1;i<37;i++){
    var parent = document.getElementById(i);
    parent.setAttribute("value", '');
    parent.style.background="gray";
  }
}
function checkSeat(){
  var b = 1;
  while(b<36){
    var j = 0;
    while(j < 6){
      var front = document.getElementById(b+j);
      var back = document.getElementById(b+6+j);
      if(back != null){
        var first =parseInt(front.value);
        var last = parseInt(back.value);
        if(first > last){
          front.style.background="red"
          back.style.background="green"
        }else if(first<last){
          front.style.background="green"
          back.style.background="green"
        }else if(first==last){
          front.style.background="orange"
          back.style.background="orange"
        }
      }
      j++;
    }
    b+=6;
  }             
}
