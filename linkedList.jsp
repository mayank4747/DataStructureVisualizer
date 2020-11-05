<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type='text/css' rel='stylesheet' href='/DataStructureVisualizer/css/bootstrap.min.css' >
<script src='/DataStructureVisualizer/js/jquery-3.4.1.min.js'></script>
<script src='js/linkedList_function.js'></script>
<script src='/DataStructureVisualizer/js/bootstrap.min.js'></script>
<script>
window.addEventListener("load",hideArea);
</script>
<style>
body {
  font-family: "Lato", sans-serif;
}


/*
#index0,#a0{
 animation-name: index0;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
#index1,#a1{
 animation-name: index1;
  animation-duration: 1.25s;
  animation-iteration-count: 1;
}
#index2,#a2{
 animation-name: index2;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
}
#index3,#a3{
 animation-name: index3;
  animation-duration: 1.75s;
  animation-iteration-count: 1;
}
#index4,#a4{
 animation-name: index4;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
#index5,#a5{
 animation-name: index5;
  animation-duration: 2.25s;
  animation-iteration-count: 1;
}
#index6{
 animation-name: index6;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
}


@keyframes index0 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
} 
@keyframes index1 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
}
@keyframes index2 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
} 
@keyframes index3 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
} 
@keyframes index4 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
} 
@keyframes index5 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
} 
@keyframes index6 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
 
} 
@keyframes index7 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
}  
@keyframes index8 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
} 
@keyframes index9 {
  0%   { left:0px; top:-350px;}
  100%  { left:0px; top:0px;}
}      

*/


.text-block {

  color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
}



#txtBox
{
position:absolute;
 right: 2px; 
top:0;
display:flex;
align-items:center;
justify-content:center;
color:black;
    margin: 0px;
width: 280px;
    height: 225px;
 background-image: url("msg.jpg");
padding:30px;
}




#a0,#a1,#a2,#a3,#a4,#a5,#h{
display:flex;
align-items:center;
justify-content:center;
    margin: 0px;
width: 30px;
    height: 30px;
}


#index0,#index1,#index2,#index3,#index4,#index5,#index6 {  
display:flex;
align-items:center;
justify-content:center;
    width: 50px;
    height: 60px;
    margin: 0px;
    background-color: lightblue;
 border-radius: 50%;
    border: 3px solid black;
}
.btn:hover {
  background-color: RoyalBlue;
}

.btn {
  height:45px;
  background-color: Grey;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
}
.sidenav {
  height: 100%;
  width: 310px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}
#head
{
display:flex;
align-items:center;
justify-content:center;
    width: 50px;
    height: 30px;
    margin: 0px;
    font-size:20px;
   color:white;
    background-color: black;
    border: 3px solid black;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: white;
  display: block;
}

.sidenav a:hover {
  color: white;
font-size:23px;
}
#creation {
   position:fixed;
    top: 40%;
    left: 85%;
    width:33em;
    height:4em;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
    display: inline-block;
 
}
.main {
  margin-left: 310px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}


@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}










</style>
</head>
<body>

<div class="sidenav">
<a href="index.jsp"><button class="btn"><i class="fa fa-home"></i> Home</button></a>
<h1 style="color:white;">LINKED LIST</h1>
<a href="#insertAtTopModal" id='insertAtTop' data-toggle="modal" onclick="insertAtTopModal()">INSERT AT TOP</a>
<a href="#insertAtPositionModal" id='insertAtPosition' data-toggle="modal" onclick="insertAtPositionModal()">INSERT AT POSITION</a>
<a href="#insertAtBottomModal" id='insertAtBottom' data-toggle="modal" onclick="insertAtBottomModal()">INSERT AT BOTTOM</a>
<a href="#" id='deleteFromTop'  onclick="deleteFromTopFunction()">DELETE FROM TOP</a>
<a href="#deleteFromPositionModal" id='deleteFromPosition' data-toggle="modal" onclick="deleteFromPositionModal()">DELETE FROM POSITION</a>
<a href="#" id='deleteFromBottom'  onclick="deleteFromBottomFunction()">DELETE FROM BOTTOM</a>
<a href="#updateModal" id='update' data-toggle="modal" onclick="updateModal()">UPDATE</a>
<a href="#searchModal" id='search' data-toggle="modal" onclick="searchModal()">SEARCH</a>
<a href="#traverseFromTopToBottom" id='traverseFromTopToBottom' onclick="traverseFromTopToBottomFunction()">TRAVERSE FROM <br>TOP TO BOTTOM</a>
</div>


<div class="main">
<H1 id="heading">LINKED LIST</H1> 
<H3 id='tc'></H3><br><br><br>
<b><div id="txtBox"><div class="text-block" style="color:black">
  </div></div></b>
<div class="container" id="creation" >
<center> <div class="col">
 <div class="row"><div class="col-sm-1 " id="head"  ><b>HEAD</b></div></div>
<div class="row"><div class="col-sm-1" id="h">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1 " id="index0"  ><p0 id="dp0"></p0></div></div>
<div class="row"><div class="col-sm-1" id="a0">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1" id="index1"  ><p1  id="dp1"></p1></div></div>
<div class="row"><div class="col-sm-1" id="a1">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1 " id="index2"  ><p2 id="dp2"></p2></div></div>
<div class="row"><div class="col-sm-1" id="a2">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1" id="index3"  ><p3  id="dp3"></p3></div></div>
<div class="row"><div class="col-sm-1" id="a3">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1 " id="index4"  ><p4 id="dp4"></p4></div></div>
<div class="row"><div class="col-sm-1" id="a4">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1" id="index5"  ><p5 id="dp5"></p5></div></div>
<div class="row"><div class="col-sm-1" id="a5">&#x2193;</div></div>
 <div class="row"><div class="col-sm-1" id="index6"  ><p6 id="dp6"></p6></div></div>
  </div></center>







  </div>



</div>

<div class="modal fade" id="insertAtTopModal" tabindex="-1" role="dialog" aria-labelledby="insertAtTopModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="insertAtTopModalLabel">INSERT AT TOP </h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
   <small>Enter an element</small>
        <input type="number" class="form-control" id="insertAtTopElement" name=insertAtTopElement" placeholder="ENTER NUMBER TO INSERT">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="insertAtTopFunction()">INSERT</button>
      </div>
    </div>
  </div>
</div>





<div class="modal fade" id="insertAtPositionModal" tabindex="-1" role="dialog" aria-labelledby="insertAtPositionModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="insertAtPositionModalLabel">INSERT AT POSITION</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
<small>Enter Position</small>      
<input type="number" class="form-control" id="insertPosition" name=insertPosition" placeholder="ENTER POSITION">
   <small>Enter an element</small>
        <input type="number" class="form-control" id="insertAtPositionElement" name=insertAtPositionElement" placeholder="ENTER NUMBER TO INSERT">

</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="insertAtPositionFunction()">INSERT</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="insertAtBottomModal" tabindex="-1" role="dialog" aria-labelledby="insertAtBottomModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="insertAtBottomModalLabel">INSERT AT BOTTOM</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
   <small>Enter an element</small>
        <input type="number" class="form-control" id="insertAtBottomElement" name=insertAtBottomElement" placeholder="ENTER NUMBER TO INSERT">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="insertAtBottomFunction()">INSERT</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="deleteFromPositionModal" tabindex="-1" role="dialog" aria-labelledby="deleteFromPositionModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deleteFromPositionModalLabel">DELETE FROM POSITION</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
   <small>Enter Position</small>
        <input type="number" class="form-control" id="deletePosition" name=deletePosition" placeholder="ENTER POSITION">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="deleteFromPositionFunction()">DELETE</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="updateModal" tabindex="-1" role="dialog" aria-labelledby="updateModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="updateModalLabel">UPDATE</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
<small>Enter Position</small>      
<input type="number" class="form-control" id="updatePosition" name=updatePosition" placeholder="ENTER POSITION">
   <small>Enter an element</small>
        <input type="number" class="form-control" id="updateElement" name=updateElement" placeholder="ENTER NUMBER TO UPDATE">

</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="updateFunction()">UPDATE</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="searchModalLabel">SEARCH</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
   <small>Enter Element</small>
        <input type="number" class="form-control" id="searchElement" name=searchElement" placeholder="ENTER NUMBER">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="searchFunction()">SEARCH</button>
      </div>
    </div>
  </div>
</div>



</body>
</html> 









	







