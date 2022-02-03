var outputText=document.getElementById('outputText');
 const  kbds=document.querySelectorAll('.keys');
var shift=document.getElementById('shift');
var output='';

for (const kbd of kbds) {
    //code
kbd.onclick=function(e){
 
 
   if (e.target.id==="space") {
    output=output+" ";
    outputText.value=output;
    console.log('you pushed me!!');
   }else if(kbd.id==='backspace') {
       outputText.value=outputText.value.substring(0, outputText.value.length - 1);
       output=outputText.value;
    }else if (kbd.id==='enter') {
       outputText.value=outputText.value+"\n";
    
       output=outputText.value;
    }
    else if (kbd.id==='delete') {
        outputText.value='';
        output='';
    }
    else if (e.target.value!="shift"){
   output=output+e.target.value;
   outputText.value=output;
   console.log('you pushed me!!');

   }
   
 };
}

shift.onclick=function(){
 for (const kbd of kbds){
  if (kbd.value.charCodeAt(0)>=97 &&kbd.value.charCodeAt(0)<=122) {
    kbd.value=kbd.value.toUpperCase();
    console.log('aaaaa');
  }else{
   kbd.value=kbd.value.toLowerCase();
   console.log('AAA');

  }
 }
};


