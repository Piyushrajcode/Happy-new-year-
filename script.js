function shw(){
  var txt=document.getElementById("txt").value;
  if(txt==0){
    alert("Enter your name")
  }
  else{
  document.getElementById("hd"). innerHTML=txt;
  
  
  document.getElementById("pr"). style.display="none";
  
  document.getElementById("pd"). style.display="block";
  
  
  }
  }
