const $=document;
const number_hour=$.querySelectorAll('b')
let date;
let array={}

// for color hour and secend 
number_hour.forEach(function(elm){
   array[elm.innerHTML]=elm;})

function start() {
   date=new Date()
   $.querySelector('.secend').style.transform="rotate("+date.getSeconds()*6+"deg)";
   $.querySelector('.minut').style.transform="rotate("+date.getMinutes()*6+"deg)";
   $.querySelector('.hour').style.transform="rotate("+((date.getHours()%12)*30+(date.getMinutes()/2))+"deg)";
   color_hour(date.getHours()%12)
   if(array[date.getSeconds()/5] && date.getSeconds()/5!=date.getHours()%12 ||date.getSeconds()/5==0) 
      color_secend(date.getSeconds()/5);
}

setInterval(start,1000)

function color_secend(secend){
   if(secend==0){  array[12].classList.add('color_secend_clas');
      array[12].addEventListener('animationend',function(){
         array[12].classList.remove('color_secend_clas');
      })}
   else{  array[secend].classList.add('color_secend_clas');
      array[secend].addEventListener('animationend',function(){
         array[secend].classList.remove('color_secend_clas');
      })}
}

function color_hour(hour){
   if(hour==0){array[12].style.color='green' ; array[11].style.color='white';}
   else if(hour==1){array[1].style.color='green' ; array[12].style.color='white';}
   else{array[hour].style.color='green' ; array[hour-1].style.color='white';}
}

