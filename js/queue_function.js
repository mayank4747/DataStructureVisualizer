var front=-1,rear=-1;
function dis() 
{
document.getElementById('enqueue').style.pointerEvents="none";
document.getElementById('enqueue').style.cursor="default";
document.getElementById('dequeue').style.pointerEvents="none";
document.getElementById('dequeue').style.cursor="default";
document.getElementById('clearQueue').style.pointerEvents="none";
document.getElementById('clearQueue').style.cursor="default";
}
async function ena()
{
await sleep(2000);
document.getElementById('enqueue').style.pointerEvents="auto";
document.getElementById('enqueue').style.cursor="pointer";
document.getElementById('dequeue').style.pointerEvents="auto";
document.getElementById('dequeue').style.cursor="pointer";
document.getElementById('clearQueue').style.pointerEvents="auto";
document.getElementById('clearQueue').style.cursor="pointer";
}


function hideArea()
{
$('#arr').hide();
}
function enqueueModal()
{
$("#txtBox").html("");
$('#heading').html("INSERTING AN ELEMENT IN QUEUE");
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
$.trim($("#enqueueElement").val(''));
$("#enqueueElement").focus();
}
async function enqueueFunction()
{
var enqueueElem=$.trim($("#enqueueElement").val());
if(enqueueElem==="")
{
alert("Please enter a Number to insert an element.");
return;
}
if(rear==9)
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
}
enqueueElem=parseInt(enqueueElem);
rear++;
$("#a"+front).html("<b>FRONT</b>");
$("#a"+rear).html("<b>REAR</b>");
$("p"+rear).html(enqueueElem);
$("#index"+(rear)).css({"border-width": "4px","font-size":"0px","border-color": "purple"}); 
$("#index"+(rear)).animate({
    'font-size': "50px"
  }, 3000, function() {
$("#index"+(rear)).css({"border-width": "2px","border-color": "maroon"}); 
});


$("#txtBox").html(enqueueElem+" is inserted into Queue!!");
if(front==rear)
{
$("#a"+front).html("<b>FRONT REAR</b>");
}
$("#front").html(front);
$("#rear").html(rear);
ena();
}
async function dequeueFunction()
{
$("#txtBox").html("");
$('#heading').html("REMOVING AN ELEMENT IN QUEUE");
if(front==-1 && rear==-1)
{
alert("Queue is empty!!");
return;
}
dis();
var dequeueElem=$("p"+front).html();
$("#index"+(front)).css({"border-width": "4px","border-color": "purple"}); 
$("#index"+(front)).animate({
    'font-size': "0px"
  }, 3000, function() {
$("#a"+front).html("");
$("p"+front).html("");

});

await sleep(3500);
$("#index"+(front)).css({"border-width": "2px","border-color": "maroon"}); 

if(front==rear)
{
$("#a"+rear).html("");
rear=-1;
front=-1;
}
else
{
front++;
$("#a"+front).html("<b>FRONT</b>");
}
$("#txtBox").html(dequeueElem+" is removed from Queue!!");
if(front==rear)
{
$("#a"+front).html("<b>FRONT REAR</b>");
}
$("#front").html(front);
$("#rear").html(rear);
ena();
}
function clearQueueFunction()
{
dis();
$("#txtBox").html("");
$('#heading').html("QUEUE - First In First Out (FIFO)");
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
      return new Promise(resolve => setTimeout(resolve, ms));
}


