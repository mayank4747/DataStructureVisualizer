function dis() 
{
document.getElementById('creationFunction').style.pointerEvents="none";
document.getElementById('creationFunction').style.cursor="default";
document.getElementById('insertionFunction').style.pointerEvents="none";
document.getElementById('insertionFunction').style.cursor="default";
document.getElementById('deletionFunction').style.pointerEvents="none";
document.getElementById('deletionFunction').style.cursor="default";
document.getElementById('linearSearchFunction').style.pointerEvents="none";
document.getElementById('linearSearchFunction').style.cursor="default";
document.getElementById('binarySearchFunction').style.pointerEvents="none";
document.getElementById('binarySearchFunction').style.cursor="default";
document.getElementById('bubbleSortFunction').style.pointerEvents="none";
document.getElementById('bubbleSortFunction').style.cursor="default";
document.getElementById('selectionSortFunction').style.pointerEvents="none";
document.getElementById('selectionSortFunction').style.cursor="default";
document.getElementById('insertionSortFunction').style.pointerEvents="none";
document.getElementById('insertionSortFunction').style.cursor="default";
document.getElementById('quickSortFunction').style.pointerEvents="none";
document.getElementById('quickSortFunction').style.cursor="default";
}
async function ena()
{
await sleep(2000);
document.getElementById('creationFunction').style.pointerEvents="auto";
document.getElementById('creationFunction').style.cursor="pointer";
document.getElementById('insertionFunction').style.pointerEvents="auto";
document.getElementById('insertionFunction').style.cursor="pointer";
document.getElementById('deletionFunction').style.pointerEvents="auto";
document.getElementById('deletionFunction').style.cursor="pointer";
document.getElementById('linearSearchFunction').style.pointerEvents="auto";
document.getElementById('linearSearchFunction').style.cursor="pointer";
document.getElementById('binarySearchFunction').style.pointerEvents="auto";
document.getElementById('binarySearchFunction').style.cursor="pointer";
document.getElementById('bubbleSortFunction').style.pointerEvents="auto";
document.getElementById('bubbleSortFunction').style.cursor="pointer";
document.getElementById('selectionSortFunction').style.pointerEvents="auto";
document.getElementById('selectionSortFunction').style.cursor="pointer";
document.getElementById('insertionSortFunction').style.pointerEvents="auto";
document.getElementById('insertionSortFunction').style.cursor="pointer";
document.getElementById('quickSortFunction').style.pointerEvents="auto";
document.getElementById('quickSortFunction').style.cursor="pointer";
}



function createModel()
{
$("#tc").html("");
$('#txtBox').hide();
$('#heading').html("CREATION");
$.trim($("#arrayElements").val(''));
$("#arrayElements").focus();
$("#srch").html("");
var count=0;
for(i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
//alert(count);
for(i=0;i<count;i++)
{
document.getElementById("index"+(i)).setAttribute("style","border-width: 2px");
document.getElementById("index"+(i)).setAttribute("style","border-color: maroon");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}
$("#arr").hide();
}



function arrayCreation()
{
$("#txtBox").show();
$("#txtBox").html("");
$('#creation').show();
var processed = $.trim($("#arrayElements").val()).replace(/  /g, ' ');
var processed = $.trim($("#arrayElements").val()).replace(/,/g, ' ');
for(var i=0;i<9;i++)
{
var processed = processed.replace(/  /g, ' ');
}
var arrayElements=$.trim(processed);
if(arrayElements.length==0)
{
alert("You have no elements in array.");
$('#creation').hide();
return;
}
var createArray=arrayElements.split(" ");
for(var i=0;i<=9;i++)
{
$('p'+i).html("");
$('#index'+i).hide();
$("#i"+i).hide();
}
if(createArray.length>10)
{
alert("Create Your Array With Max Size 10");
$('#creation').hide();
return;
}
dis();
for(var i=0;i<createArray.length;i++)
{
$.trim($('p'+i).html(" "));
}
for(var i=0;i<createArray.length;i++)
{
$('p'+i).append(createArray[i]);
$("p"+(i)).attr("font-size: 28px");
num(i);
}
ena();
}


function num(i)
{
 setTimeout(function() { 
$('#index'+i).show();
$("#i"+i).show();
  }, 500 * i); 
$("#txtBox").html("Array is created.");
}



function insertModel()
{
$("#srch").html("");
$('#txtBox').hide();
$('#heading').html("INSERTION");
$.trim($("#arrayPosition").val(''));
$.trim($("#arrayPositionElement").val(''));
$("#arrayPosition").focus();
var count=0;
for(i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
//alert(count);
for(i=0;i<count;i++)
{
document.getElementById("index"+(i)).setAttribute("style","border-width: 2px");
document.getElementById("index"+(i)).setAttribute("style","border-color: maroon");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}
$("#tc").html("TIME COMPLEXITY:<br><small>Front: O(n)<br> Middle: O(n) <br> End: O(1)<small>");
$("#arr").hide();
}



function arrayInsertion()
{
$("#txtBox").show();
$("#arr").hide();
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
var position=$.trim($("#arrayPosition").val());
var positionNumber=$.trim($("#arrayPositionElement").val());
if(positionNumber.length=="0" || position==="")
{
alert("Please enter a Number or valid position to insert an element.");
return;
}
var position = parseInt(position);
var count;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}
if(t=="10")
{
alert("Array IS FULL, You cannot insert more then 10 elements in array.");
return;
}
//alert($('p'+position).html());
//alert(t);
if(position>count+1)
{
alert("Please Enter valid position.");
return;
}

if(position<1 || position>10)
{
alert("Please Enter Valid Position from 1-10");
return;
}
var pos=positionNumber.split(" ");
if(pos.length!="1")
{
alert("Please Enter a Single Number");
return;
}

dis();
//document.getElementById('index'+t).setAttribute("style"," -webkit-transition: none;transition: none;");
$('#index'+t).show();
$('#i'+t).show();
$('p'+t).show();

for(var i=t-1;i>=position-1;i--)
{
$('p'+(i+1)).html($('p'+(i)).html());
}
$('p'+(position-1)).html(positionNumber);
$('#arr').show();



var elem = document.getElementById("index"+(position-1)); 
var elem1=document.getElementById("i"+(position-1));
var elem2=document.getElementById("arr");

var abc=$("#index"+(position-1));
var abc1=$("#i"+(position-1));
abc.css('position','absolute');
abc.css('top',120);
abc1.css('position','absolute');
abc1.css('top',200);



//elem.style.top ='120px';
//elem1.style.top ='120px';
elem2.style.top ='100px';

var pos = 0;
  var id = setInterval(setPos, 1);
  function setPos() {
    if (pos == (89*(position-1))) {
      clearInterval(id);
    } else {
      pos++; 
elem.style.left= pos + 'px';
elem1.style.left= pos + 'px';
elem2.style.left= pos + 'px';

    }
  }


pos1=0;

for(var j=position;j<=t;j++)
{
  this["sh"+j] =document.getElementById("index"+j); 
  this["shf"+j] =document.getElementById("i"+j);
//$('#i'+j).html(j+1);

}
 
var id1 = setInterval(shiftRight, 10);
  function shiftRight() {
    if (pos1 ==(89)) {
      clearInterval(id1);
    } else {
      pos1++;
for(var k=position;k<=t;k++)
{ 
 this["sh"+k].style.left = pos1 + 'px'; 
 this["shf"+k].style.left = pos1 + 'px'; 
}
    }
  }
$("#txtBox").html(positionNumber+" is inserted at index "+(position-1));
ABC(elem,elem1,position,t);
ena();
}


function ABC(elem,elem1,position,t)
{
setTimeout(function() { 
for(var j=position;j<=t+1;j++)
{
document.getElementById("index"+(j-1)).removeAttribute("style");
document.getElementById("i"+(j-1)).removeAttribute("style");
if(($('#i'+(j-1)).html())%2==0)
{
document.getElementById("index"+(j-1)).setAttribute("style","background-color:lavenderblush");
}
else
{
document.getElementById("index"+(j-1)).setAttribute("style","background-color:lavender");
}
}
}, 1000 * position);
}



function deleteModel()
{
$("#srch").html("");
$('#txtBox').hide();
$("#arr").hide();
$('#heading').html("DELETION");
$.trim($("#arrayDeletePosition").val(''));
$("#arrayDeletePosition").focus();
var count=0;
for(i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
//alert(count);
for(i=0;i<count;i++)
{
document.getElementById("index"+(i)).setAttribute("style","border-width: 2px");
document.getElementById("index"+(i)).setAttribute("style","border-color: maroon");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}
$("#tc").html("TIME COMPLEXITY:<br><small>Front: O(n)<br>Middle: O(n) <br> End: O(1)<small>");
$("#arr").hide();
}



function arrayDeletion()
{
$("#arr").hide();
$("#txtBox").show();
$("#txtBox").html("");
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
var position=$.trim($("#arrayDeletePosition").val());
if(position==="")
{
alert("Please enter a Number or valid position to delete an element.");
return;
}
var position = parseInt(position);
var count;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}
var element=$("p"+(position-1)).html();
if(position>count+1)
{
alert("Please Enter valid position.");
return;
}
if(position<1 || position>10)
{
alert("Please Enter Valid Position from 1-10");
return;
}
dis();
$('#arr').show();
if((position-1)==0)
{
$("#index"+(position-1)).css({"border-width": "4px","border-color": "black","background-color":"Orange"}); 
$("#index"+(position-1)).animate({
    'font-size': "50px"
  }, 6000, function() {

for(var i=position-1;i<=t-1;i++)
{
$('p'+(i)).html($('p'+(i+1)).html());
}
$("#index"+(t-1)).hide();
$("#i"+(t-1)).hide();
document.getElementById("index"+(position-1)).removeAttribute("style");
  
if(($('#i'+(position-1)).html())%2==0)
{
document.getElementById("index"+(position-1)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(position-1)).setAttribute("style","background-color:lavenderblush");
}
$("#arr").hide();
});
}
var elem2=document.getElementById("arr");
var pos2=0; 
var id1 = setInterval(shiftRight, 0.1);
  function shiftRight() {
    if (pos2 ==(89*(position-1))) {
      clearInterval(id1);
    } else {
      pos2++;
elem2.style.left= pos2 + 'px';
for(var k=0;k<=(pos2/89);k++)
{ 
if(k==position-1)
{
$("#index"+(k)).css({"border-width": "4px","border-color": "black","background-color":"Orange"}); 
$("#index"+(k-1)).css({"border-width": "2px","border-color": "maroon"}); 



$("#index"+(position-1)).animate({
    'font-size': "50px"
  }, 6000, function() {

if((position-1)==t-1)
{
document.getElementById("index"+(t-1)).setAttribute("style","border-width: 2px");
document.getElementById("index"+(t-1)).setAttribute("style","border-color: maroon");
if(($('#i'+(t-1)).html())%2==0)
{
document.getElementById("index"+(t-1)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(t-1)).setAttribute("style","background-color:lavenderblush");
}
$("p"+(t-1)).html("");
$("#index"+(position-1)).hide();
$("#i"+(t-1)).hide();


}
else
{
for(var i=position-1;i<=t-1;i++)
{
$('p'+(i)).html($('p'+(i+1)).html());
}
$("#index"+(t-1)).hide();
$("#i"+(t-1)).hide();

document.getElementById("index"+(position-1)).removeAttribute("style");
  
if(($('#i'+(position-1)).html())%2==0)
{
document.getElementById("index"+(position-1)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(position-1)).setAttribute("style","background-color:lavenderblush");
}
}
$("#arr").hide();
});
}
else
{ $("#index"+(k-1)).css({"border-width": "2px","border-color": "maroon"}); 
 $("#index"+(k)).css({"border-width": "4px","border-color": "black"}); 
}
}
    }
  }
$("#txtBox").html(element+" at index " +(position-1)+ " is deleted!");
ena();
}

function hideArea()
{
$("#srch").html("");
$('#arrowAnim').hide();
$('#arr').hide();
$('#txtBox').hide();
$('#cross').hide();
}





function linearSearchModal()
{
$('#txtBox').hide();
$('#heading').html("LINEAR SEARCH");
$.trim($("#linearSearchElement").val(''));
var count=0;
for(i=0;i<10;i++)
{
if($("p"+i).html()==='')
{
count=i;
break;
}
}
//alert(count);
for(i=0;i<count;i++)
{
$("p"+(i)).attr("font-size: 28px");
document.getElementById("index"+(i)).setAttribute("style","border-width: 2px");
document.getElementById("index"+(i)).setAttribute("style","border-color: maroon");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}
$("#tc").html("TIME COMPLEXITY:<br><small>Worst Case: O(n)<br>Average Case: &Theta;(n) <br> Best Case: &Omega;(1)<small>");
$("#arr").hide();
$("#txtBox").html("");
$("#srch").html("");
}



function linearSearch()
{
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
var searchElement=$.trim($("#linearSearchElement").val());

if(searchElement==="")
{
alert("Please enter a number to search.");
return;
}
var pos=searchElement.split(" ");
var searchElement = parseInt(searchElement);

if(pos.length!="1")
{
alert("Please Enter a Single Number");
return;
}
var count;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}
dis();
$("#srch").html(" Search Element= "+searchElement);
$("#txtBox").show();
var flag=0;
for(var j=0;j<=t-1;j++)
{
if($('p'+(j)).html()==searchElement)
{
var indx=j;
flag=1;
break;
}
}
if(flag==0)
{
indx=t;
}
if(indx==0)
{
$("#txtBox").html("<b><big><big>"+searchElement+" is found at index "+indx+" </big></big></b>");
$("#index"+(indx)).css({"border-width": "4px","border-color": "black","background-color":"Orange"}); 
$("#index"+(indx)).animate({
    'font-size': "50px"
  }, 3000, function() {
  
});
}


$('#arr').show();
var elem2=document.getElementById("arr");


var pos1=0; 
var id1 = setInterval(shiftRight, 0.1);
  function shiftRight() {
    if (pos1 ==(89*(indx))) {
      clearInterval(id1);
    } else {
      pos1++;
elem2.style.left= pos1 + 'px';
for(var k=0;k<=(pos1/89);k++)
{ 
if(k==indx && flag==1)
{
$("#txtBox").html("<b><big><big>"+searchElement+" is found at index "+indx+" </big></big></b>");
$("#index"+(k)).css({"border-width": "4px","border-color": "black","background-color":"Orange"}); 
$("#index"+(k-1)).css({"border-width": "2px","border-color": "maroon"}); 
$("#index"+(indx)).animate({
    'font-size': "50px"
  }, 3000, function() {
  
});
}
else
{
$("#index"+(k-1)).css({"border-width": "2px","border-color": "maroon"}); 
 $("#index"+(k)).css({"border-width": "4px","border-color": "black"}); 
if(flag==0 && k==t)
{
$("#txtBox").html("<b><big><big>"+searchElement+" is not found.</big></big></b>");
$("#arr").hide();
}
}
}
}
}
ena();
}

function binarySearchModal()
{
$('#heading').html("BINARY SEARCH");
$.trim($("#binarySearchElement").val(''));
$("#arr").hide();
$("#srch").html("");
$("#tc").html("TIME COMPLEXITY:<br><small>Worst Case: O(log n)<br>Average Case: &Theta;(log n) <br> Best Case: &Omega;(1)<small>");

}


async function binarySearch()
{
$("#txtBox").show();
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
var count=0;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}
for(var i=0;i<count-1;i++)
{


if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
document.getElementById("index"+(i+1)).setAttribute("style","background-color:lavenderblush");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
document.getElementById("index"+(i+1)).setAttribute("style","background-color:lavender");
}




var num1=$("p"+i).html();
var num2=$("p"+(i+1)).html();
num1=parseInt(num1);
num2=parseInt(num2);
if(num1>num2)
{
alert("First Enter The Sorted Array!!");
return;
}
}
var searchElement=$.trim($("#binarySearchElement").val());
if(searchElement==="")
{
alert("Please enter a number to search.");
return;
}
var pos=searchElement.split(" ");
var searchElement = parseInt(searchElement);

if(pos.length!="1")
{
alert("Please Enter a Single Number");
return;
}

dis();
var flg=0;
$("#srch").html(" Search Element= "+searchElement);
var lb=0;
var ub=count-1;
while(lb<=ub)
{
await sleep(2000);
var mid=parseInt((lb+ub)/2);
$("#a"+lb).html("lb");
$("#a"+ub).html("ub");
$("#a"+mid).html("mid");
$("#txtBox").html("lb="+lb+" ub="+ub+" mid="+mid+"");
if($("p"+mid).html()==searchElement)
{
flg=1;
$("#index"+(mid)).css({"border-width": "4px","border-color": "black","background-color":"Orange"}); 
$("#txtBox").html("");
$("#a"+ub).html("");
$("#a"+mid).html("");
$("#a"+lb).html("");
$("#txtBox").html("<b><big><big>"+searchElement+" is found at index "+mid+" </big></big></b>");
$("#index"+(mid)).animate({
    'font-size': "50px"
  }, 5000, function() {
  return false;
});
break;
}
$("#index"+(mid)).css({"border-width": "4px","border-color": "black"});

await sleep(3000);

$("#index"+(mid)).animate({
    'font-size': "28px"
  }, 3000, function() {
if($("p"+mid).html()<searchElement)
{
for(var k=0;k<=mid;k++)
{
document.getElementById("index"+(k)).removeAttribute("style");
}
var minNum=$("p"+mid).html();
$("#txtBox").html("");
$("#txtBox").html(minNum+"<"+searchElement+"<br> Here search element is greater then mid");
  $("#a"+lb).html("");
lb=mid+1;
$("#a"+mid).html("");
}
else
{
for(var k=mid;k<=count-1;k++)
{
document.getElementById("index"+(k)).removeAttribute("style");
}
var minNum=$("p"+mid).html();
$("#a"+ub).html("");
ub=mid-1;
$("#txtBox").html(minNum+">"+searchElement+"<br> Here search element is smaller then mid");
$("#a"+mid).html("");
}
$("#index"+(mid)).css({"border-width": "2px","border-color": "maroon"});
}); 
await sleep(5000);
}
if(flg==0)
{
$("#txtBox").html("<b><big><big>"+searchElement+" is not found.</big></big></b>");
}
ena();
}



async function bubbleSort()
{
$("#arr").hide();
$("#tc").html("TIME COMPLEXITY:<br><small>Worst Case: O(n^2)<br>Average Case: &Theta;(n^2) <br> Best Case: &Omega;(n)<small>");
$("#arr").hide();
$("#txtBox").show();
$("#txtBox").html("");
$("#srch").html("");
$('#heading').html("BUBBLE SORT- <small>Stable Sort<small>");

if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
dis();
count=0;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}
for(var i=0;i<=(count-1);i++)
{
$("#line"+i).hide();
document.getElementById("index"+(i)).removeAttribute("style");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}
for(var i=0;i<=(count-1);i++)
{
//alert(i+"i");
var j=0;
while(j<=(count-1)-i-1)
//for(var j=0;j<=(count-1)-i;j++)
{
var num1=$("p"+j).html();
var num2=$("p"+(j+1)).html();
num1=parseInt(num1);
num2=parseInt(num2);
//alert("nummm"+num1+","+num2);

if(num1>num2)
{
$('#a'+j).html("Greater");
$('#a'+(j+1)).html("Smaller");
next=document.getElementById("index"+(j+1));
current=document.getElementById("index"+(j));
var ptag1=document.getElementById('a'+(j+1));
var ptag2=document.getElementById('a'+(j));
var pos = 0;  
  var id = setInterval(setPos,25);
  function setPos() {
    if (pos == 89) {
      clearInterval(id);
    } else {
      pos++; 
$("#index"+(j)).css({"border-width": "4px","border-color": "black"}); 
$("#index"+(j+1)).css({"border-width": "4px","border-color": "black"}); 
next.style.right= pos + 'px';
current.style.left= pos + 'px';
ptag1.style.right= pos + 'px';
ptag2.style.left= pos + 'px';
    }
  }
await sleep(3000);
$("#a"+(j)).html("");
$("#a"+(j+1)).html("");
document.getElementById("a"+(j)).removeAttribute("style");
document.getElementById("a"+(j+1)).removeAttribute("style");
document.getElementById("index"+(j)).removeAttribute("style");
document.getElementById("index"+(j+1)).removeAttribute("style");
if(($('#i'+(j)).html())%2==0)
{
document.getElementById("index"+(j)).setAttribute("style","background-color:lavender");
document.getElementById("index"+(j+1)).setAttribute("style","background-color:lavenderblush");
}
else
{
document.getElementById("index"+(j)).setAttribute("style","background-color:lavenderblush");
document.getElementById("index"+(j+1)).setAttribute("style","background-color:lavender");
}
var currentp=$('p'+j).html();
var nextp=$('p'+(j+1)).html();
$('p'+j).remove();
$('p'+(j+1)).remove();
$('p'+j).html("");
$('p'+(j+1)).html("");
var text1 = "<p"+j+" id='dp"+j+"'>"+nextp+"</p"+j+">";
$('#index'+(j)).append(text1);
var text2 = "<p"+(j+1)+" id='dp"+(j+1)+"'>"+currentp+"</p"+(j+1)+">";
$('#index'+(j+1)).append(text2);
setTimeout(function() {
  }, 3000);
}
else
{
$('#a'+(j+1)).html("Greater");
$('#a'+(j)).html("Smaller");
$("#index"+(j)).css({"border-width": "4px","border-color": "black"}); 
$("#index"+(j+1)).css({"border-width": "4px","border-color": "black"}); 
setTimeout(function() {
$("#index"+(j)).css({"border-width": "2px","border-color": "maroon"}); 
$("#index"+(j+1)).css({"border-width": "2px","border-color": "maroon"}); 
 }, 2000);
}
await sleep(2000);
$('#a'+j).html("");
$('#a'+(j+1)).html("");
await sleep(1000);
j++;
}
$("#index"+j).css({"border-width": "4px","border-color": "purple","font-size":"50px"}); 
if(i!=0) $("#line"+(i-1)).hide();
if(j!=0) 
{
var k= document.querySelector('#index'+(j-1));
k.insertAdjacentHTML('afterend', '<div class="mydivinside"  id="line'+i+'" style="height:100px; border-left: 3px solid black;"></div>');
$("#line"+i).show();
}
}
$("#txtBox").html("Array is sorted.");
for(var k=0;k<count;k++)
{
$("#line"+k).remove();
}
ena();
}
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}







async function selectionSort()
{
$("#arr").hide();
$("#tc").html("TIME COMPLEXITY:<br><small>Worst Case: O(n^2)<br>Average Case: &Theta;(n^2) <br> Best Case: &Omega;(n^2)<small>");
$("#txtBox").show();
$("#txtBox").html("");
$("#srch").html("");
$('#heading').html("SELECTION SORT- <small>Not Stable<small>");
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
dis();
var count=0;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}

for(var i=0;i<=count-1;i++)
{
$("#line"+i).hide();
document.getElementById("index"+(i)).removeAttribute("style");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}



var temp;
var i=0
var pos =0;  
while(i<count-1)
{
if(i!=0)
{
var k= document.querySelector('#index'+(i-1));
k.insertAdjacentHTML('afterend', '<div class="mydivinside"  id="line'+i+'" style="height:100px; border-left: 3px solid black;"></div>');
$("#line"+i).show();
}

var ar=document.getElementById("arr");
var smallest=i;

  var id = setInterval(setPos,1);
  function setPos() {
    if (pos == (89*i)) {
      clearInterval(id);
    } else {
      pos++; 
$("#arr").show();
ar.style.left= pos + 'px';
    }
  }
$("#index"+(i)).css({"border-width": "5px","border-color": "black","font-size":"50px"}); 
$('#a'+i).html("Smallest Number");
await sleep(2000);
var j=i+1;
while(j<count)
{
var num1=$("p"+smallest).html();
var num2=$("p"+(j)).html();
num1=parseInt(num1);
num2=parseInt(num2);
var pos1 = 0;  
  var id1 = setInterval(setPos1,25);
  function setPos1() {
    if (pos1 == (89)) {
      clearInterval(id1);
    } else {
      pos1++; 
$("#index"+(j)).css({"border-width": "4px","border-color": "black","font-size":"28px"}); 
if(j!=i+1 && (j-1)!=smallest)
{
$("#index"+(j-1)).css({"border-width": "2px","border-color": "maroon","font-size":"28px"}); 
}

if(num1>num2)
{
if(smallest!=i)
{
$('#a'+smallest).html("");
$("#index"+(smallest)).css({"border-width": "2px","border-color": "maroon","font-size":"28px"}); 
}
else
{
$('#a'+smallest).html("");
$("#index"+(smallest)).css({"border-width": "5px","border-color": "black","font-size":"28px"});
}
smallest=j;
$('#a'+smallest).html("Smallest Number");
$("#index"+(smallest)).css({"border-width":"5px","border-color": "black","font-size":"50px"});
}
else
{
$("#index"+(smallest)).css({"border-width":"5px","border-color": "purple","font-size":"50px"});
}
}
}
await sleep(2000);
if(count-1==j && smallest!=j) 
{
$("#index"+(j)).css({"border-width": "2px","border-color": "maroon","font-size":"28px"}); 
}
j++;
}

if(i!=smallest)
{
$("#a"+smallest).html("");
small=document.getElementById("index"+(smallest));
current=document.getElementById("index"+(i));
var pos2 = 0;  
  var id2 = setInterval(setPos2,25);
  function setPos2() {
    if (pos2 == (89*(smallest-i))) {
      clearInterval(id2);
    } else {
      pos2++; 
small.style.right= pos2 + 'px';
current.style.left= pos2 + 'px';
    }
  }
await sleep(3000*(smallest-i));
document.getElementById("index"+(i)).removeAttribute("style");
document.getElementById("index"+(smallest)).removeAttribute("style");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
if(($('#i'+(smallest)).html())%2==0)
{
document.getElementById("index"+(smallest)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(smallest)).setAttribute("style","background-color:lavenderblush");
}
var currentp=$('p'+i).html();
var smallp=$('p'+(smallest)).html();
$('p'+i).remove();
$('p'+(smallest)).remove();
var text1 = "<p"+i+"></p"+i+">";

$('#index'+(i)).append(text1);
$("p"+i).html(smallp);
var text2 = "<p"+smallest+"></p"+smallest+">";

$('#index'+(smallest)).append(text2);
$("p"+smallest).html(currentp);
await sleep(2000);
}
$("#index"+(i)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
$("#line"+i).hide();
i++;
$("#a"+smallest).html("");
//$("#index"+(j)).css({"border-width": "2px","border-color": "maroon","font-size":"28px"});
//$("#index"+(i)).css({"border-width": "2px","border-color": "maroon","font-size":"28px"});
//$("#index"+(smallest)).css({"border-width": "2px","border-color": "maroon","font-size":"28px"});
}
for(var k=0;k<count;k++)
{
$("#index"+(k)).css({"border-width": "5px","border-color": "purple","font-size":"50px"});
}
$("#arr").hide();
$("#txtBox").html("Array is sorted.");
for(var k=0;k<count;k++)
{
$("#line"+k).remove();
}
ena();
}



async function insertionSort()
{
$("#arr").hide();
$("#tc").html("TIME COMPLEXITY:<br><small>Worst Case: O(n^2)<br>Average Case: &Theta;(n^2) <br> Best Case: &Omega;(n)<small>");
$("#arr").hide();
$("#txtBox").show();
$("#txtBox").html("");
$("#srch").html("");
$('#heading').html("INSERTION SORT- <small>Stable Sort<small>");
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
dis();
var count=0;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}

for(var i=0;i<=count-1;i++)
{$("#line"+i).hide();
document.getElementById("index"+(i)).removeAttribute("style");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}

var i=1;
var j=0;
var num1=0;
var temp=0;
$("#arr").show();
var pos = 0;  



while(i<count)
{
var k= document.querySelector('#index'+(i-1));
k.insertAdjacentHTML('afterend', '<div class="mydivinside"  id="line'+i+'" style="height:100px; border-left: 3px solid black;"></div>');
$("#line"+i).show();
$("#a"+0).html("SORTED PORTION");
$("#a"+(count-1)).html("UNSORTED PORTION");
temp=$('p'+i).html();
temp=parseInt(temp);
$("#index"+(i)).css({"border-width": "5px","border-color": "purple","font-size":"50px"});
var ar=document.getElementById("arr");
var slash=document.getElementById('index'+i);
  var id = setInterval(setPos,25);
  function setPos() {
    if (pos == (89*i)) {
      clearInterval(id);
    } else {
      pos++; 
arr.style.left= pos + 'px';
    }
  }
j=i-1;
num1=$('p'+j).html();
num1=parseInt(num1);

$("#index"+(j+1)).css({"border-width": "4px","border-color": "black","font-size":"50px"});
$("#index"+(j)).css({"border-width": "4px","border-color": "black","font-size":"50px"});
await sleep(3000);
while(temp<num1 && j>=0)
{
current=document.getElementById("index"+j);
next=document.getElementById("index"+(j+1));
var pos1=0;
var id1 = setInterval(setPos1,25);
  function setPos1() {
    if (pos1 == (89)) {
      clearInterval(id1);
    } else {
      pos1++; 
current.style.left= pos1 + 'px';
next.style.right= pos1 + 'px';
    }
  }
await sleep(3000);
document.getElementById("index"+(j)).removeAttribute("style");
document.getElementById("index"+(j+1)).removeAttribute("style");
if(($('#i'+(j)).html())%2==0)
{
document.getElementById("index"+(j)).setAttribute("style","background-color:lavender");
document.getElementById("index"+(j+1)).setAttribute("style","background-color:lavenderblush");
}
else
{
document.getElementById("index"+(j)).setAttribute("style","background-color:lavenderblush");
document.getElementById("index"+(j+1)).setAttribute("style","background-color:lavender");
}
$("#index"+(j)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
$("#index"+(j+1)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
var currentp=$('p'+j).html();
var smallp=$('p'+(j+1)).html();
$('p'+j).remove();
$('p'+(j+1)).remove();
var text1 = "<p"+j+"></p"+j+">";
$('#index'+(j)).append(text1);
$("p"+j).html(smallp);
var text2 = "<p"+(j+1)+"></p"+(j+1)+">";
$('#index'+(j+1)).append(text2);
$("p"+(j+1)).html(currentp);
j=j-1;
num1=$('p'+j).html();
num1=parseInt(num1);
$("#index"+(j)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
}
$("#line"+i).hide();
$("#index"+(j+1)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
$("#index"+(j)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
$('p'+(j+1)).html(temp);
i++;
}
$("#a"+0).html("");
$("#a"+(count-1)).html("");
$("#txtBox").html("Array Is Sorted.");
for(var k=0;k<count;k++)
{
$("#line"+k).remove();
}

$("#arr").hide();
$("#index"+(i-1)).css({"border-width": "4px","border-color": "purple","font-size":"50px"});
ena();
}


async function quickSort()
{
$("#arr").hide();
$("#tc").html("TIME COMPLEXITY:<br><small>Worst Case: O(n^2)<br>Average Case: &Theta;(nlogn) <br> Best Case: &Omega;(nlogn)<small>");
$("#arr").hide();
$("#txtBox").show();
$("#txtBox").html("");
$("#srch").html("");
$('#heading').html("QUICK SORT- <small>Not Stable!! Based on Divide And Conquer Technique<small>");
if($('p'+0).html()==="")
{
alert("First Create An ARRAY.");
return;
}
dis();
var count=0;
for(var t=0;t<=9;t++)
{
if($('p'+(t)).html()==="")
{
count=t;
break;
}
}

for(var i=0;i<=count-1;i++)
{
$("#line"+i).hide();
document.getElementById("index"+(i)).removeAttribute("style");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
}
}
Quick(0,count-1,count-1);
//$("#txtBox").html("Array is SORTED!!!");
}





async function Quick(first,last,len)
{
var wrong= '&#10006';
var crs = "<p id='cross' style='font-size:25px;'><big><b>"+ wrong +"</b></big></p>";
var pivot,i,j,temp;
if(first<last)
{
pivot=first;
i=first;
j=last;
$("#a"+pivot).html("PIVOT");
$("#txtBox").html("Searching a Number Greater than Pivot From left");
$("#index"+(pivot)).css({"border-width": "4px","border-color":"black","background-color": "orange","font-size":"50px"});
await sleep(2000);
while(i<j)
{
var num1=$("p"+i).html();
num1=parseInt(num1);
var piv=$("p"+pivot).html();
piv=parseInt(piv);
var num2=$("p"+j).html();
num2=parseInt(num2);
while(num1<=piv && i<last)
{
if(i!=pivot)
$("#txtBox").html(num1+" is Smaller than Pivot.So Moving Forward");
//if(i==pivot) $("#index"+(i)).css({"border-width": "4px","border-color":"black","font-size":"50px"});
if(pivot!=(i-1))
{
$('#a'+(i-1)).html("");
}
$('#cross').show();
if(i!=pivot)
{
$('#a'+i).html(crs);
}
if(i!=pivot)
{
$("#index"+(i)).css({"border-width": "4px","border-color":"black","background-color": "lavender","font-size":"28px"});
}
if((i-1)!=pivot) 
{
$("#index"+(i-1)).css({"border-width": "2px","border-color":"black","background-color": "lavender","font-size":"28px"});
}
await sleep(1000);
i++;
num1=$("p"+i).html();
num1=parseInt(num1);
piv=$("p"+pivot).html();
piv=parseInt(piv);
}
if((i-1)!=pivot)
{
$("#index"+(i-1)).css({"border-width": "2px","border-color":"black","background-color": "lavender","font-size":"28px"});
$('#a'+(i-1)).html("");
}
if(num1>piv)
{
$("#index"+(i)).css({"border-width": "6px","border-color":"maroon","background-color": "lavender","font-size":"28px"});
$("#txtBox").html("FOUND!!! "+num1+" is Greater than Pivot.");
$("#a"+i).html("GREATER THAN "+piv);
}
else
{
$('#a'+i).html(crs);
}
await sleep(1000);
$("#txtBox").html("Searching a Number Smaller than Pivot From right");
await sleep(1000);
while(num2>piv)
{
$("#txtBox").html(num1+" is Greater than Pivot.So Moving Backward");
if(j!=last && j!=i) $("#index"+(j+1)).css({"border-width": "2px","border-color":"black","background-color": "lavender","font-size":"28px"});
if(j!=i)
{
$('#a'+j).html(crs);
}
if((j+1)!=i)
{
$('#a'+(j+1)).html("");
}
if(j!=i) $("#index"+(j)).css({"border-width": "4px","border-color":"black","background-color": "lavender","font-size":"28px"});
await sleep(1000);
j--;
piv=$("p"+pivot).html();
piv=parseInt(piv);
num2=$("p"+j).html();
num2=parseInt(num2);
}
if((j+1)!=i)
{
$("#index"+(j+1)).css({"border-width": "2px","border-color":"black","background-color": "lavender","font-size":"28px"});
$('#a'+(j+1)).html("");
}
if(num2<piv)
{
$("#index"+(j)).css({"border-width": "6px","border-color":"maroon","background-color": "lavender","font-size":"28px"});
$("#txtBox").html("FOUND!!! "+num1+" is Smaller than Pivot.");
$("#a"+j).html("SMALLER THAN "+piv);
}
await sleep(1000);
if(i<j)
{
$("#a"+i).html("");

$("#a"+j).html("");
var elem1=document.getElementById("index"+i);
var elem2=document.getElementById("index"+j);
n1=$("#index"+i).html();
n2=$("#index"+j).html();
if(n1!=n2)
$("#txtBox").html("Exchanging&nbsp;"+n1+"&nbsp;and&nbsp;"+n2);
var pos=0;
 var id = setInterval(setPos,1);
  function setPos() {
    if (pos == (89*(j-i))) {
      clearInterval(id);
    } else {
      pos++; 
elem1.style.left= pos + 'px';
elem2.style.right= pos + 'px';
    }
  }
await sleep(4000);
document.getElementById("index"+(i)).removeAttribute("style");
document.getElementById("index"+(j)).removeAttribute("style");
if(($('#i'+(i)).html())%2==0)
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavender");
document.getElementById("index"+(j)).setAttribute("style","background-color:lavenderblush");
}
else
{
document.getElementById("index"+(i)).setAttribute("style","background-color:lavenderblush");
document.getElementById("index"+(j)).setAttribute("style","background-color:lavender");
}
var currentp=$('p'+i).html();
currentp=parseInt(currentp);
var smallp=$('p'+(j)).html();
smallp=parseInt(smallp);
$('p'+i).remove();
$('p'+(j)).remove();
var text1 = "<p"+i+"></p"+i+">";
$('#index'+(i)).append(text1);
$("p"+i).html(smallp);
var text2 = "<p"+(j)+"></p"+(j)+">";
$('#index'+(j)).html(text2);
$("p"+(j)).html(currentp);
//temp=num1;
//$("p"+i).html(num2);
//$("p"+j).html(temp);
$("#index"+(pivot)).css({"border-width": "4px","border-color":"black","background-color": "orange","font-size":"50px"});
}
//$("#index"+(pivot)).css({"border-width": "4px","border-color":"black","background-color": "orange","font-size":"50px"});
}

//await sleep(1000*(j-i));
await sleep(1000);
$("#a"+j).html("");
$("#a"+i).html("");
$("#index"+(i)).css({"border-width": "2px","border-color":"maroon","background-color": "lavender","font-size":"28px"});
var elem_p=document.getElementById("index"+pivot);
var elem2=document.getElementById("index"+j);
np=$("#index"+pivot).html();
n2=$("#index"+j).html();
if(np!=n2)
$("#txtBox").html("Exchanging<br>&nbsp;"+np+"&nbsp;and&nbsp;"+" "+n2);
var pos1=0;
 var id1 = setInterval(setPos1,1);
  function setPos1() {
    if (pos1 == (89*(j-pivot))) {
      clearInterval(id1);
    } else {
      pos1++; 
elem_p.style.left= pos1 + 'px';
elem2.style.right= pos1 + 'px';
    }
  }
await sleep(4000);
document.getElementById("index"+(pivot)).removeAttribute("style");
document.getElementById("index"+(j)).removeAttribute("style");
if(($('#i'+(pivot)).html())%2==0)
{
document.getElementById("index"+(pivot)).setAttribute("style","background-color:lavender");
document.getElementById("index"+(j)).setAttribute("style","background-color:lavenderblush");
}
else
{
document.getElementById("index"+(pivot)).setAttribute("style","background-color:lavenderblush");
document.getElementById("index"+(j)).setAttribute("style","background-color:lavender");
}
var currentpiv=$('p'+pivot).html();
currentpiv=parseInt(currentpiv);
var smallp=$('p'+(j)).html();
smallp=parseInt(smallp);
$('p'+pivot).remove();
$('p'+(j)).remove();
var text1 = "<p"+pivot+"></p"+pivot+">";
$('#index'+(pivot)).append(text1);
$("p"+pivot).html(smallp);
var text2 = "<p"+(j)+"></p"+(j)+">";
$('#index'+(j)).html(text2);
$("p"+(j)).html(currentpiv);
$("#index"+(j)).css({"border-width": "4px","border-color":"purple","background-color": "lavender","font-size":"50px"});
var par=document.getElementById("index"+j);
var pari=document.getElementById("i"+j);
$("#index"+(j)).css({"border-width": "2px","border-color":"maroon","background-color": "yellow","font-size":"50px"});
par.style.top='50px';
pari.style.top='50px';

$("#a"+j).html("PARTITION POINT");
var pn=$("#index"+j).html;
$("#txtBox").html(pn+ "is PARTITION POINT");
$("#a"+pivot).html("");

Quick(first,j-1,len);
//if((pivot%2)==0) $("#index"+(pivot)).css({"border-width": "2px","border-color":"maroon","background-color": "lavender","font-size":"28px"});
//else $("#index"+(pivot)).css({"border-width": "2px","border-color":"maroon","background-color": "lavenderblush","font-size":"28px"});
Quick(j+1,last,len);
}
ena();
var m=0;
var cnt=0;
for(var k=0;k<=len;k++)
{
var num1=$("p"+k).html();
var num2=$("p"+(k+1)).html();
num1=parseInt(num1);
num2=parseInt(num2);
if(num1>num2)
{
cnt=1;
break;
}
}
if(cnt==0)
{
$("#txtBox").html("Array is SORTED!!!");
for(var m=0;m<=len;m++)
{
$("#line"+m).hide();
$("#a"+m).html("");
document.getElementById("i"+(m)).removeAttribute("style");
document.getElementById("index"+(m)).removeAttribute("style");
if(($('#i'+(m)).html())%2==0)
{
document.getElementById("index"+(m)).setAttribute("style","background-color:lavender");
}
else
{
document.getElementById("index"+(m)).setAttribute("style","background-color:lavenderblush");
}
}
return false;
}
}
















