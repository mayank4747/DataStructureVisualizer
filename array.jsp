<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type='text/css' rel='stylesheet' href='/DataStructureVisualizer/css/bootstrap.min.css' >
<script src='/DataStructureVisualizer/js/jquery-3.4.1.min.js'></script>
<script src='js/Button.js'></script>
<script src='/DataStructureVisualizer/js/bootstrap.min.js'></script>
<script>
window.addEventListener("load",hideArea);
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}


#creation {
    position:fixed;
    top: 80%;
    left: 55%;
    width:33em;
    height:4em;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
    display: inline-block;
 
}

#index0,#i0{
 animation-name: index0;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index1,#i1{
 animation-name: index1;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index2,#i2{
 animation-name: index2;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index3,#i3{
 animation-name: index3;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index4,#i4{
 animation-name: index4;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index5,#i5{
 animation-name: index5;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index6,#i6{
 animation-name: index6;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index7,#i7{
 animation-name: index7;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index8,#i8{
 animation-name: index8;
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
#index9,#i9{
 animation-name: index9;
  animation-duration: 0.5s;
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
#index0,#index1,#index2,#index3,#index4,#index5,#index6,#index7,#index8,#index9 {
   display:flex;
align-items:center;
justify-content:center;
    width: 70px;
    height: 70px;
    margin: 6px;
    background-color: #A0A0A0;
    border: 2px solid #800000;
 
  }
#arr{

  content: "\21E7";
}
#cross{
content: "\292C";
color:red;
}

#txtBox{
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
padding-right:20px;
padding-left:20px;
padding-top:40px;
padding-bottom:20px;
}



  
#i0,#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9{
display:flex;
align-items:center;
justify-content:center;
    width: 70px;
    height: 20px;
    margin: 6px;
font-size:15px;
}


#a0,#a1,#a2,#a3,#a4,#a5,#a6,#a7,#a8,#a9{
display:flex;
align-items:center;
justify-content:center;
    width: 70px;
    height: 20px;
    margin: 6px;
font-size:15px;
}

.btn {
  background-color: Grey;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
height:45px;
}

.btn:hover {
  background-color: RoyalBlue;
}

.sidenav {
  height: 100%;
  width: 240px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  //color: #818181;
  display: block;
  color: white;
}

.sidenav a:hover {
 font-size: 30px;
}



.main {
  margin-left: 240px; /* Same as the width of the sidenav */
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
<a href="index.jsp"><button class="btn"> Home</button></a>
<h1 style="color:white;">ARRAY</h1>
<a href="#creationModal" id='creationFunction' data-toggle="modal" onclick="createModel()"> CREATION</a>
  <a href="#insertionModal" id='insertionFunction' data-toggle="modal" onclick="insertModel()">INSERTION</a>
  <a href="#deletionModal" id='deletionFunction' data-toggle="modal" onclick="deleteModel()">DELETION</a>
  <a href="#">SEARCHING</a>
<ul>
      <li class="nav-item active">
 <a class="nav-link" href="#linearSearchModal" id="linearSearchFunction" data-toggle="modal" onclick="linearSearchModal()"><small><small>LINEAR SEARCH</small></small></a>
</li>

      <li class="nav-item active">
     <a class="nav-link" href="#binarySearchModal" id="binarySearchFunction" data-toggle="modal" onclick="binarySearchModal()"><small><small>BINARY SEARCH</small></small></a>
      </li>
</ul>
  <a href="#">SORTING</a>
<ul>
      <li class="nav-item active">
       <a class="nav-link" href="#" id="bubbleSortFunction" onclick="bubbleSort()">  <small><small>BUBBLE SORT</small></small></a>
</li>

<li class="nav-item active">

       <a class="nav-link" href="#" id="selectionSortFunction" onclick="selectionSort()">  <small><small>SELECTION SORT</small></small></a>
</li>
<li class="nav-item active">
     <a class="nav-link" href="#" id="insertionSortFunction" onclick="insertionSort()"> <small><small>INSERTION SORT</small></small></a>
</li>
<li class="nav-item active">
     <a class="nav-link" href="#" id="quickSortFunction" onclick="quickSort()"><small><small>QUICK SORT</small></small></a>
</li>
</ul>
</div>


<div class="main">
  
<H1 id="heading"></H1> 
<H2 id='tc'></H2>

<center><b><div id="txtBox"></div></b></center>
<div class="container" id="creation" >


<div class="row">
<div class="col-sm-1"  id="a0"></div>
<div class="col-sm-1"  id="a1"></div>
<div class="col-sm-1"  id="a2"></div>
<div class="col-sm-1"  id="a3"></div>
<div class="col-sm-1"  id="a4"></div>
<div class="col-sm-1"  id="a5"></div>
<div class="col-sm-1"  id="a6"></div>
<div class="col-sm-1"  id="a7"></div>
<div class="col-sm-1" id="a8"></div>
<div class="col-sm-1" id="a9"></div>
  </div>




 <div class="row">
 <div class="col-sm-1" style="background-color:lavender;" id="index0"><p0 id="dp0"></p0></div>
 <div class="col-sm-1" style="background-color:lavenderblush;" id="index1"  ><p1 id="dp1"></p1></div>
 <div class="col-sm-1" style="background-color:lavender;" id="index2"  ><p2 id="dp2"></p2></div>
 <div class="col-sm-1" style="background-color:lavenderblush;" id="index3"  ><p3  id="dp3"></p3></div>
 <div class="col-sm-1" style="background-color:lavender;" id="index4"  ><p4 id="dp4"></p4></div>
 <div class="col-sm-1" style="background-color:lavenderblush;" id="index5"  ><p5 id="dp5"></p5></div>
 <div class="col-sm-1" style="background-color:lavender;" id="index6"  ><p6 id="dp6"></p6></div>
 <div class="col-sm-1" style="background-color:lavenderblush;" id="index7"  ><p7 id="dp7"></p7></div>
 <div class="col-sm-1" style="background-color:lavender;" id="index8" ><p8 id="dp8"></p8></div>
 <div class="col-sm-1" style="background-color:lavenderblush;" id="index9" ><p9 id="dp9"></p9></div>
  </div>






<div class="row">
 <div class="col-sm-1"  id="i0">0</div>
 <div class="col-sm-1"  id="i1">1</div>
 <div class="col-sm-1"  id="i2">2</div>
 <div class="col-sm-1"  id="i3">3</div>
 <div class="col-sm-1"  id="i4">4</div>
 <div class="col-sm-1"  id="i5">5</div>
 <div class="col-sm-1"  id="i6">6</div>
 <div class="col-sm-1"  id="i7">7</div>
 <div class="col-sm-1" id="i8">8</div>
 <div class="col-sm-1" id="i9">9</div>
  </div>


<big><big><div class="col-sm-1" id="arr">&#8679;</div></big></big>
<center><p id='srch'></p></center>



 
  </div>



</div>



<div id="arrowAnim">
  <div class="arrowSliding" id="arrowMoving">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay1">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay2">
    <div class="arrow"></div>
  </div>
  <div class="arrowSliding delay3">
    <div class="arrow"></div>
  </div>



</div>







<div class="modal fade" id="creationModal" tabindex="-1" role="dialog" aria-labelledby="creationModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="creationModalLabel">CREATION </h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
   <small>Enter Elements</small>
        <input type="text" class="form-control" id="arrayElements" name="arrayElements" placeholder="ELEMENTS OF ARRAY">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
   <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="arrayCreation()">CREATE</button>
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="insertionModal" tabindex="-1" role="dialog" aria-labelledby="insertionModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="insertionModalLabel">INSERTION</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
	<small>Enter Position</small>
          <input type="number" class="form-control" id="arrayPosition" name="arrayPosition" placeholder="ENTER POSITION" maxlength="2">
<small>Enter an element to be inserted in array:</small>	
<input type="number" class="form-control" id="arrayPositionElement" name="arrayPositionElement" placeholder="ENTER ELEMENT">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="arrayInsertion()">INSERT</button>
      </div>
    </div>
  </div>
</div>



<div class="modal fade" id="deletionModal" tabindex="-1" role="dialog" aria-labelledby="deletionModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="deletionModalLabel">DELETION</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
	<small>Enter Position</small>
          <input type="number" class="form-control" id="arrayDeletePosition" name="arrayDeletePosition" placeholder="ENTER POSITION" maxlength="2">

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="arrayDeletion()">DELETE</button>
      </div>
    </div>
  </div>
</div>











<div class="modal fade" id="linearSearchModal" tabindex="-1" role="dialog" aria-labelledby="linearSearchModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="linearSearchModalLabel">LINEAR SEARCH</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
	<small>Enter Element</small>
          <input type="number" class="form-control" id="linearSearchElement" name="linearSearchElement" placeholder="ENTER ELEMENT">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="linearSearch()">Search</button>
      </div>
    </div>
  </div>
</div>




<div class="modal fade" id="binarySearchModal" tabindex="-1" role="dialog" aria-labelledby="binarySearchModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="binarySearchModalLabel">BINARY SEARCH</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
	<small>Enter Element</small>
<input type="number" class="form-control" id="binarySearchElement" name="binarySearchElement" placeholder="ENTER ELEMENT">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="binarySearch()">Search</button>
      </div>
    </div>
  </div>
</div>
</body>
</html> 





