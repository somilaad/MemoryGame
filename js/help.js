var min = 0;
var sec = 0;
var time ,time2;

function welcome(){
       document.getElementById("div1").style.visibility="hidden";
    document.getElementById("div2").style.visibility="visible";
        
 var uname =document.getElementById("uname").value;

    var jobj;
    jobj={"username":uname , "score" : ""};
    document.cookie="expires=01 Jan 2015";
    document.cookie= uname+"="+jobj ;

    checkuser(uname);
    starttimer();
}

function checkuser(uname){
    alert("Welcome " +uname+ "!");
}

function pair(id){
    var img= document.getElementById(id);
    if(id==="img1" || id==="img7"){
    img.src = "images/tile1.jpg";}
    if(id==="img2" || id==="img14"){
    img.src = "images/tile2.jpg";}
    if(id==="img3" || id==="img5"){
    img.src = "images/tile3.jpg";}
    if(id==="img4" || id==="img11"){
    img.src = "images/tile4.jpg";}
    if(id==="img6" || id==="img16"){
    img.src = "images/tile5.jpg";}
    if(id==="img8" || id==="img10"){
    img.src = "images/tile6.jpg";}
    if(id==="img12" || id==="img13"){
    img.src = "images/tile7.jpg";}
    if(id==="img9" || id==="img15"){
    img.src = "images/tile8.jpg";}
}

var turntime;
var count =0;
var score=0;


function flip(id){
    var imgid= document.getElementById(id);
             count++;
             document.getElementById("click").innerHTML=count;
        pair(id);
       clickcount(count , id);
      }
  
  function clickcount(count , id)
  {
      var y = count%2;
         
      var imgsrc= document.getElementById(id).src;
      if (y===1)
      {
          document.cookie="image1src="+imgsrc;
          document.cookie="image1id="+id;
      }
      else if (y===0)
      {
          document.cookie="image2src="+imgsrc;
          document.cookie="image2id="+id;
          
         var name = "image1src=";
            var sp = document.cookie.split(';');
            for(var i=0; i<sp.length; i++) 
            {
            var c = sp[i].trim();
                if (c.indexOf(name)===0) 
                    var image1src= c.substring(name.length,c.length);
            }
           
            
        var name1 = "image2src=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) 
            {
            var s = ca[i].trim();
                if (s.indexOf(name1)===0) 
                    var image2src= s.substring(name1.length,s.length);
            }
            
           if(image1src===image2src)
           { score++;
               scorecheck(score);
          }
        else {
            
            var name = "image1id=";
            var sp = document.cookie.split(';');
            for(var i=0; i<sp.length; i++) 
            {
            var c = sp[i].trim();
                if (c.indexOf(name)===0) 
                    var image1id= c.substring(name.length,c.length);
            }
                  
            
        var name1 = "image2id=";
            var ca = document.cookie.split(';');
            for(var i=0; i<ca.length; i++) 
            {
            var s = ca[i].trim();
                if (s.indexOf(name1)===0) 
                    var image2id= s.substring(name1.length,s.length);
            }
           
           time2=setTimeout(function (){flipback(image1id , image2id)},1500);
           
        }
            
      }
  }
  
function flipback(image1id , image2id){
    document.getElementById(image1id).src = "images/back.gif" ; 
    document.getElementById(image2id).src = "images/back.gif"
}

function scorecheck(score){
    
    if(score===8){
    document.getElementById("div4").style.visibility="visible";
        clearInterval(time);
      document.getElementById("no_click").innerHTML=count;
      document.getElementById("finishtime").innerHTML=min+":"+sec;
      
          }
    else
        document.getElementById("score").innerHTML=score;
}


function starttimer(){
     time=setInterval(function (){timer()},1000);
   
     //start the timer by incrementing the value every second
     }
function  timer(){
        if(sec<60){
            sec++;
        }
        else{
            sec=0;
            min++;
        }
        document.getElementById("timer").innerHTML = min+":"+sec  ;   
        //flip the images using AJAX
      document.getElementById("tbl").style.visibility = "visible";
}

function pause(id){
    clearInterval(time);
    document.getElementById("restart").style.visibility="visible";
    document.getElementById(id).style.visibility="hidden";
}
function restart(id){
    starttimer();
    document.getElementById("pause").style.visibility="visible";
    document.getElementById(id).style.visibility="hidden";
}
 function refresh(){
     window.location.reload();
 }