function dis() 
{
document.getElementById('push').style.pointerEvents="none";
document.getElementById('push').style.cursor="default";
document.getElementById('pop').style.pointerEvents="none";
document.getElementById('pop').style.cursor="default";
document.getElementById('clearStack').style.pointerEvents="none";
document.getElementById('clearStack').style.cursor="default";
}
async function ena()
{
await sleep(2000);
document.getElementById('push').style.pointerEvents="auto";
document.getElementById('push').style.cursor="pointer";
document.getElementById('pop').style.pointerEvents="auto";
document.getElementById('pop').style.cursor="pointer";
document.getElementById('clearStack').style.pointerEvents="auto";
document.getElementById('clearStack').style.cursor="pointer";
}




function pushModel()
{
$("#txtBox").html("");
$('#heading').html("PUSHING ELEMENT IN STACK");
var count=0;
for(var i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
if(i==10)
{
count=10;
}
for(var j=count;j<10;j++)
{
$("#index"+j).hide();
$("#i"+j).hide();
}
$.trim($("#pushElement").val(''));
$("#pushElement").focus();
}

async function pushFunction()
{
var pushElem=$.trim($("#pushElement").val());
if(pushElem==="")
{
alert("Please enter a Number to push an element.");
return;
}
var count=0;
for(var i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
if(i==10)
{
alert("STACK is FULL");
return;
}
var top=count-1;
if(count==10)
{
alert("STACK is FULL");
return;
}
dis();
var pushElem = parseInt(pushElem);
top=top+1;
$("#index"+top).show();
$("#i"+top).show();
$("p"+top).html(pushElem);
$("#top").html(top);
document.getElementById("top").setAttribute("style","animation-play-state: running");
$("#index"+(top)).css({"border-width": "3px","border-color": "purple"}); 
if(top!=0)
{
$("#index"+(top-1)).css({"border-width": "2px","border-color": "maroon"}); 
$("#t"+(top-1)).html("");
}
var topElem=$("p"+top).html();
$("#t"+top).html("<b>TOP</b>");
$("#txtBox").html(topElem+" is pushed into Stack!!");
await sleep(3000);
document.getElementById("top").setAttribute("style","animation-play-state: paused");
ena();
}

async function popFunction()
{
$("#txtBox").html("");
$('#heading').html("POPPING ELEMENT FROM STACK");
var count=0;
if($("p"+0).html()==='')
{
alert("STACK is EMPTY");
return;
}
for(var i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
if(i==10 && count!=0)
{
alert("STACK is EMPTY");
return;
}
dis();
var top;
if(count==0 && i==10)
{
count=10;
}
top=count-1;
document.getElementById("top").setAttribute("style","animation-play-state: running");
var elem1=document.getElementById("i"+top);
var elem2=document.getElementById("index"+top);
var pos=0;
 var id = setInterval(setPos,1);
  function setPos() {
    if (pos == (600)) {
      clearInterval(id);
    } else {
      pos++; 
elem2.style.bottom= pos + 'px';
elem1.style.bottom= pos + 'px';
    }
  }
$("#i"+top).hide();
$("#t"+top).html("");
await sleep(3000);
document.getElementById("index"+(top)).removeAttribute("style");
if((top-1)%2==0)
{
document.getElementById("index"+(top)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(top)).setAttribute("style","background-color:lavenderblush");
}
var topElem=$("p"+top).html();
$("p"+top).html("");
$("#index"+top).hide();

$("#top").html((top-1));
if(top!=0)
{
$("#t"+(top-1)).html("<b>TOP</b>");
$("#index"+(top-1)).css({"border-width": "3px","border-color": "purple"}); 
}
$("#txtBox").html(topElem+" is popped from Stack!!");
document.getElementById("top").setAttribute("style","animation-play-state: paused");
ena();
}

function clearStackFunction()
{
dis();
$("#txtBox").html("");
$('#heading').html("STACK - Last In First Out (LIFO)");
$("#top").html("-1");
for(var i=0;i<10;i++)
{
$("#index"+(i)).css({"border-width": "2px","border-color": "maroon"}); 
$("#t"+(i)).html("");
$("p"+i).html("");
$("#index"+i).show();
$("#i"+i).show();
}
ena();
}
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}






