function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
function dis() 
{
document.getElementById('insertAtTop').style.pointerEvents="none";
document.getElementById('insertAtTop').style.cursor="default";
document.getElementById('insertAtPosition').style.pointerEvents="none";
document.getElementById('insertAtPosition').style.cursor="default";
document.getElementById('insertAtBottom').style.pointerEvents="none";
document.getElementById('insertAtBottom').style.cursor="default";
document.getElementById('deleteFromTop').style.pointerEvents="none";
document.getElementById('deleteFromTop').style.cursor="default";
document.getElementById('deleteFromPosition').style.pointerEvents="none";
document.getElementById('deleteFromPosition').style.cursor="default";
document.getElementById('deleteFromBottom').style.pointerEvents="none";
document.getElementById('deleteFromBottom').style.cursor="default";
document.getElementById('update').style.pointerEvents="none";
document.getElementById('update').style.cursor="default";
document.getElementById('search').style.pointerEvents="none";
document.getElementById('search').style.cursor="default";
document.getElementById('traverseFromTopToBottom').style.pointerEvents="none";
document.getElementById('traverseFromTopToBottom').style.cursor="default";
}
async function ena()
{
await sleep(2000);
document.getElementById('insertAtTop').style.pointerEvents="auto";
document.getElementById('insertAtTop').style.cursor="pointer";
document.getElementById('insertAtPosition').style.pointerEvents="auto";
document.getElementById('insertAtPosition').style.cursor="pointer";
document.getElementById('insertAtBottom').style.pointerEvents="auto";
document.getElementById('insertAtBottom').style.cursor="pointer";
document.getElementById('deleteFromTop').style.pointerEvents="auto";
document.getElementById('deleteFromTop').style.cursor="pointer";
document.getElementById('deleteFromPosition').style.pointerEvents="auto";
document.getElementById('deleteFromPosition').style.cursor="pointer";
document.getElementById('deleteFromBottom').style.pointerEvents="auto";
document.getElementById('deleteFromBottom').style.cursor="pointer";
document.getElementById('update').style.pointerEvents="auto";
document.getElementById('update').style.cursor="pointer";
document.getElementById('search').style.pointerEvents="auto";
document.getElementById('search').style.cursor="pointer";
document.getElementById('traverseFromTopToBottom').style.pointerEvents="auto";
document.getElementById('traverseFromTopToBottom').style.cursor="pointer";
}
var nCounter=0;
function insertAtTopModal()
{
$.trim($("#insertAtTopElement").val(''));
$('#heading').html("INSERTING ELEMENT AT TOP");
$("#tc").html("TIME COMPLEXITY :O(1)");
}
function insertAtBottomModal()
{
$.trim($("#insertAtBottomElement").val(''));
$('#heading').html("INSERTING ELEMENT AT BOTTOM");
$("#tc").html("TIME COMPLEXITY :O(n)");
}
function insertAtPositionModal()
{
$.trim($("#insertAtPositionElement").val(''));
$.trim($("#insertPosition").val(''));
$('#heading').html("INSERTING ELEMENT AT POSITION");
$("#tc").html("TIME COMPLEXITY :O(n)");
}
function deleteFromPositionModal()
{
$.trim($("#deletePosition").val(''));
$('#heading').html("DELETING ELEMENT FROM POSITION");
$("#tc").html("TIME COMPLEXITY :O(n)");
}
function updateModal()
{
$.trim($("#updateElement").val(''));
$.trim($("#updatePosition").val(''));
$('#heading').html("UPDATING ELEMENT");
$("#tc").html("TIME COMPLEXITY :O(n)");
}
function searchModal()
{
$.trim($("#searchElement").val(''));
$('#heading').html("SEARCHING ELEMENT");
$("#tc").html("TIME COMPLEXITY :O(n)");
}
class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }  
async insertT()
{
var element=$("#insertAtTopElement").val();
if(element==="")
{
alert("Please enter a number.");
return false;
}
$("#head").show();
$("#h").show();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}

var flag=0;
if(count==0 && i==7)
{count=6;
flag=1;
}
if(flag==1)
{
alert("Linked List is full.");
return false;
}
dis();
for(var j=0;j<=count;j++)
{
$("#index"+j).show();
$("#a"+j).show();
}
$("#a"+(j-1)).hide();


for(var k=count-1;k>=0;k--)
{
$('p'+(k+1)).html($('p'+(k)).html());
}
count++;

var node = new Node(element);
var current;
$("p0").html(element);
$("#index0").show();
document.getElementById("index"+(0)).setAttribute("style","background-color:yellow");
var elem = document.getElementById("index"+(0));
var elem1 = document.getElementById("a"+(0));
elem.style.right= '200px';
for(var k=1;k<=count-1;k++)
{
(document.getElementById("index"+(k))).style.bottom='90px';
}
await sleep(1000);
for(var k=1;k<=count;k++)
{
$("#index"+(k)).animate({
    'bottom': "0px"
  }, 2000, function() {

});
}
//await sleep(2000);
$("#index"+(0)).animate({
    'left': "0px"
  }, 2000, function() {

});



if (this.head == null)
{
this.head = node;
}
else
{
node.next=this.head;
this.head=node;
}
this.size++;
$('.text-block').html(element+" is inserted at TOP");
ena();
}







insertB()
{  
$("#head").show();
$("#h").show();
//alert(this.size);
var element=$("#insertAtBottomElement").val();
//alert(element);
var node = new Node(element);
if(element==="")
{
alert("Please enter a number.");
return false;
}
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
var flag=0;
if(count==0 && i==7)
{
count=6;
flag=1;
}
if(flag==1)
{
alert("Linked List is full.");
return false;
}
dis();
for(var j=0;j<=count;j++)
{
$("#index"+j).show();
$("#a"+j).show();
}
$("#a"+(j-1)).hide();
//count++;
$("p"+count).html(element);
$("#index"+count).show();
document.getElementById("index"+(count)).setAttribute("style","background-color:yellow");
var elem = document.getElementById("index"+(count));
//var elem1 = document.getElementById("a"+(0));
elem.style.right= '200px';

$("#index"+(count)).animate({
    'left': "0px"
  }, 2000, function() {

});




 

this.size++;
$('.text-block').html(element+" is inserted at BOTTOM");
ena();
}
async insertP()
{
var element=$("#insertAtPositionElement").val();
var index=$("#insertPosition").val();
if(element==="")
{
alert("Please enter a number.");
return false;
}
if(index==="")
{
alert("Please enter a position.");
return false;
}
if ((index > 1 && index >= (this.size+2)) || index==0 || index<0)
{
alert("Invalid Position!!");
$('#heading').html("LINKED LIST");
return false;
}
else
{
var node = new Node(element);
$("#head").show();
$("#h").show();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}


var flag=0;
if(count==0 && i==7)
{
count=6;
flag=1;
}
if(flag==1)
{
alert("Linked List is full.");
return false;
}
dis();
for(var j=0;j<=count;j++)
{
$("#index"+j).show();
$("#a"+j).show();
}
$("#a"+(j-1)).hide();
for(var k=count-1;k>=index-1;k--)
{
$('p'+(k+1)).html($('p'+(k)).html());
}
count++;
$("p"+(index-1)).html(element);
$("#index"+(index-1)).show();

document.getElementById("index"+(index-1)).setAttribute("style","background-color:yellow");
var elem = document.getElementById("index"+(index-1));
elem.style.right= '200px';
for(var k=index;k<=count-1;k++)
{
(document.getElementById("index"+(k))).style.bottom='90px';
}
await sleep(1000);
for(var k=index;k<=count-1;k++)
{
$("#index"+(k)).animate({
    'bottom': "0px"
  }, 2000, function() {

});
}
//await sleep(2000);
$("#index"+(index-1)).animate({
    'left': "0px"
  }, 2000, function() {

});

this.size++;
}
$('.text-block').html(element+" is inserted at Position "+(index));
ena();
}




async deleteT()
{
$('#heading').html("DELETING ELEMENT FROM TOP");
if($("p0").html()==="")
{
alert("Empty Linked List!!");
$("#tc").html("");
$('#heading').html("LINKED LIST");
$('.text-block').html("Empty Linked List.");
return false;
}
dis();
var count=0;
/*for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}*/
count=this.size;
if((count-1)<1)
{
$("#h").html("");
}

var element=$("p0").html();
$('.text-block').html(element+" is deleted from TOP");
document.getElementById("index"+(0)).setAttribute("style","background-color:pink");
$("#a0").html("");
await sleep(500);
$("#index"+(0)).animate({
    'left': "700px"
  }, 2000, function() {

});
await sleep(3500);
if((count-1)<1)
{
$("#head").hide();
$("#h").html("&#x2193;");
$("#h").hide();
}

$("#a0").html("&#x2193;");
document.getElementById("index"+(0)).removeAttribute("style");
document.getElementById("index"+(0)).setAttribute("style","background-color:lightblue");


for(var k=0;k<=(count-2);k++)
{
$('p'+(k)).html($('p'+(k+1)).html());
}
$("#a"+(count-2)).hide();
$("p"+(count-1)).html("");
$("#index"+(count-1)).hide();
this.size--;
ena();
}






async deleteB()
{
$('#heading').html("DELETING ELEMENT FROM BOTTOM");
if($("p0").html()==="")
{
alert("Empty Linked List!!");
$("#tc").html("");
$('.text-block').html("Empty Linked List.");
$('#heading').html("LINKED LIST");
return false;
}

else
{
dis();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
if(count==0 && i==7)
{
count=7;
}
var element=$("p"+(count-1)).html();

$('.text-block').html(element+" is deleted from BOTTOM");
if((count-1)<1)
{
$("#h").html("");
}
document.getElementById("index"+(count-1)).setAttribute("style","background-color:pink");
$("#a"+(count-2)).html("");
await sleep(500);
$("#index"+(count-1)).animate({
    'left': "700px"
  }, 2000, function() {

});

await sleep(3500);
if((count-1)<1)
{
$("#head").hide();
$("#h").html("&#x2193;");
$("#h").hide();
}

document.getElementById("index"+(count-1)).removeAttribute("style");
document.getElementById("index"+(count-1)).setAttribute("style","background-color:lightblue");
$("#a"+(count-2)).html("&#x2193;");
$("#a"+(count-2)).hide();
$("p"+(count-1)).html("");
$("#index"+(count-1)).hide();

}  
this.size--;
ena();
}




async deleteP()
{
var index=$("#deletePosition").val();
if(index==="")
{
alert("Please enter a position.");
return false;
}
if($("p0").html()==="")
{
alert("Empty Linked List!!");
$("#tc").html("");
$('.text-block').html("Empty Linked List.");
$('#heading').html("LINKED LIST");
return false;
}
if((index > 0 && index >this.size) || index==0 || index<0)
{
alert("Invalid Position");
$('#heading').html("LINKED LIST");
return false;
}

else
{
dis();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
if(count==0 && i==7)
{
count=7;
}
var element=$("p"+(index-1)).html();
$('.text-block').html(element+" is deleted from Position "+index);
if((count-1)<1)
{
$("#h").html("");
}
document.getElementById("index"+(index-1)).setAttribute("style","background-color:pink");
$("#a"+(index-1)).html("");
await sleep(500);
$("#index"+(index-1)).animate({
    'left': "700px"
  }, 2000, function() {

});
await sleep(3500);
if((count-1)<1)
{
$("#head").hide();
$("#h").html("&#x2193;");
$("#h").hide();
}

$("#a"+(index-1)).html("&#x2193;");
document.getElementById("index"+(index-1)).removeAttribute("style");
document.getElementById("index"+(index-1)).setAttribute("style","background-color:lightblue");

for(var k=index-1;k<=count-1;k++)
{
$('p'+(k)).html($('p'+(k+1)).html());
}
$("p"+(count-1)).html("");
$("#index"+(count-1)).hide();
$("#a"+(count-2)).hide();

this.size--;
}
ena();
}



async traverse()
{
$('#heading').html("TRAVERSING ELEMENTS");



if($("p0").html()==="")
{
alert("Empty Linked List!!");
$('.text-block').html("Empty Linked List.");
$("#tc").html("");
$('#heading').html("LINKED LIST");
return false;
}

else
{
dis();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
$('.text-block').html(" ");
$('.text-block').html("Traversing Elements :- ");
var flag=0;
for(var k=0;k<=count-1;k++)
{
var pp=$("p"+k).html();
await sleep(1500);
$('.text-block').append(pp+" ");
if(k!=0)
{
document.getElementById("index"+(k-1)).setAttribute("style","border-width:2px;background-color:lightblue");
}
document.getElementById("index"+(k)).setAttribute("style","background-color:orange");
$("#index"+(k)).animate({
     'border-width':'6px'

  },1000, function() {

});
}

await sleep(2000);
document.getElementById("index"+(k-1)).setAttribute("style","border-width:2px;background-color:lightblue");
}
ena();
}


async update()
{
var element=$("#updateElement").val();
var index=$("#updatePosition").val();
if(element==="")
{
alert("Please enter a number.");
return false;
}
if(index==="")
{
alert("Please enter a position.");
return false;
}
if($("p0").html()==="")
{
alert("Empty Linked List!!");
$('.text-block').html("Empty Linked List.");
$("#tc").html("");
$('#heading').html("LINKED LIST");
return false;
}
if((index > 0 && index >this.size) || index==0 || index<0)
{
alert("Invalid Position");
$('#heading').html("LINKED LIST");
return false;
}

else
{
dis();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
$('.text-block').html(element + " is updated at position "+index);
for(var k=0;k<=index-1;k++)
{
await sleep(1500);
if(k!=0)
{
document.getElementById("index"+(k-1)).setAttribute("style","border-width:2px");
}
$("#index"+(k)).animate({
     'border-width':'6px'
  },500, function() {

});
if(k==index-1)
{
document.getElementById("index"+(index-1)).setAttribute("style","background-color:yellow");
$("#index"+(index-1)).animate({
     'font-size':'0px'
  }, 2000, function() {
document.getElementById("index"+(index-1)).setAttribute("style","background-color:yellow;font-size:0px");
$("p"+(index-1)).html(element);
ena();
$("#index"+(index-1)).animate({
    'font-size': "28px"
  }, 2000, function() {
});
});
return false;
}
}
}

}
async search()
{
var element=$("#searchElement").val();
if(element==="")
{
alert("Please enter a number.");
return false;
}
if($("p0").html()==="")
{
alert("Empty Linked List!!");
$('.text-block').html("Empty Linked List.");
$("#tc").html("");
$('#heading').html("LINKED LIST");
return false;
}

else
{
dis();
var count=0;
for(var i=0;i<=6;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}

var flag=0;
for(var k=0;k<=count-1;k++)
{
await sleep(1500);
if(k!=0)
{
document.getElementById("index"+(k-1)).setAttribute("style","border-width:2px");
}
$("#index"+(k)).animate({
     'border-width':'6px'
  },500, function() {

});
if(element==($("p"+k).html()))
{
flag=1;
$('.text-block').html(element + " is found. ");
document.getElementById("index"+(k)).setAttribute("style","background-color:yellow");
$("#index"+(k)).animate({
     'font-size':'40px'
  }, 2000, function() {

});
ena();
return false;
}
}

}
await sleep(2000);
if(flag == 0)
{
document.getElementById("index"+(k-1)).setAttribute("style","border-width:2px");
alert("ELEMENT NOT FOUND");
$('.text-block').html(element + " is not found. ");
ena();
return false;
}
}

}
 
var ll = new LinkedList();
 
function insertAtTopFunction()
{
for(var i=0;i<=6;i++)
{document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.insertT();
}
function insertAtBottomFunction()
{
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.insertB();
}
function insertAtPositionFunction()
{
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.insertP();
}
function deleteFromTopFunction()
{
$("#tc").html("TIME COMPLEXITY :O(1)");
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.deleteT();
}
function deleteFromBottomFunction()
{
$("#tc").html("TIME COMPLEXITY :O(n)");
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.deleteB();
}
function deleteFromPositionFunction()
{
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.deleteP();
}
function traverseFromTopToBottomFunction()
{
$("#tc").html("TIME COMPLEXITY :O(n)");
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.traverse();
}
function updateFunction()
{
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.update();
}
function searchFunction()
{
for(var i=0;i<=6;i++)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lightblue");
if($("p"+i).html()==='')
{
$("#index"+i).hide();
$("#a"+i).hide();
}
}
ll.search();
}
function hideArea()
{
$("#head").hide();
$("#h").hide();
}





















