var front=-1,rear=-1;
function dis() 
{
document.getElementById('cenqueue').style.pointerEvents="none";
document.getElementById('cenqueue').style.cursor="default";
document.getElementById('cdequeue').style.pointerEvents="none";
document.getElementById('cdequeue').style.cursor="default";
document.getElementById('cclearQueue').style.pointerEvents="none";
document.getElementById('cclearQueue').style.cursor="default";
}
async function ena()
{
await sleep(2000);
document.getElementById('cenqueue').style.pointerEvents="auto";
document.getElementById('cenqueue').style.cursor="pointer";
document.getElementById('cdequeue').style.pointerEvents="auto";
document.getElementById('cdequeue').style.cursor="pointer";
document.getElementById('cclearQueue').style.pointerEvents="auto";
document.getElementById('cclearQueue').style.cursor="pointer";
}
function hideArea()
{
$('#arr').hide();
}
function cenqueueModal()
{
$("#txtBox").html("");
$('#heading').html("INSERTING AN ELEMENT IN CIRCULAR QUEUE");
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
$.trim($("#cenqueueElement").val(''));
$("#cenqueueElement").focus();
}
async function cenqueueFunction()
{
var cenqueueElem=$.trim($("#cenqueueElement").val());
if(cenqueueElem==="")
{
alert("Please enter a Number to insert an element.");
return;
}
if((front==0 && rear==9) || (rear+1==front))
{
alert("QUEUE is full!!!");
return;
}
dis();
$("#a"+rear).html("");
$("#a"+front).html("");
if(rear==-1 && front==-1)
{
front=0;
rear=0;
}
else if(rear==9)
{
rear=0;
}
else
{
rear++;
}
cenqueueElem=parseInt(cenqueueElem);
$("#a"+front).html("<b>FRONT</b>");
$("#a"+rear).html("<b>REAR</b>");
$("p"+rear).html(cenqueueElem);
$("#index"+(rear)).css({"border-width": "4px","font-size":"0px","border-color": "purple"}); 
$("#index"+(rear)).animate({
    'font-size': "50px"
  }, 2000, function() {
$("#index"+(rear)).css({"border-width": "2px","border-color": "maroon"}); 
});


$("#txtBox").html(cenqueueElem+" is inserted into Circular Queue!!");
if(front==rear)
{
$("#a"+front).html("<b>FRONT REAR</b>");
}
$("#front").html(front);
$("#rear").html(rear);
ena();
}
async function cdequeueFunction()
{
$("#txtBox").html("");
$('#heading').html("REMOVING AN ELEMENT IN CIRCULAR QUEUE");
if(front==-1 && rear==-1)
{
alert("Queue is empty!!");
return;
}
dis();
var cdequeueElem=$("p"+front).html();
$("#index"+(front)).css({"border-width": "4px","border-color": "purple"}); 
$("#index"+(front)).animate({
    'font-size': "0px"
  }, 2000, function() {
$("#a"+front).html("");
$("p"+front).html("");

});

await sleep(2500);
$("#index"+(front)).css({"border-width": "2px","border-color": "maroon"}); 


if(front==rear)
{
$("#a"+rear).html("");
rear=-1;
front=-1;
}
else if(front==9)
{
front=0;
}
else
{
front++;
$("#a"+front).html("<b>FRONT</b>");
}

$("#txtBox").html(cdequeueElem+" is removed from Circular Queue!!");
if(front==rear)
{
$("#a"+front).html("<b>FRONT REAR</b>");
}
$("#front").html(front);
$("#rear").html(rear);
ena();
}
function cclearQueueFunction()
{
dis();
$("#txtBox").html("");
$('#heading').html("CIRCULAR QUEUE - First In First Out (FIFO)");
front=-1;
rear=-1;
for(var i=0;i<10;i++)
{
$("p"+i).html("");
$("#a"+i).html("");
}
$("#front").html("-1");
$("#rear").html("-1");
ena();
}
function sleep(ms) {
      return new    Promise(resolve => setTimeout(resolve, ms));
}


