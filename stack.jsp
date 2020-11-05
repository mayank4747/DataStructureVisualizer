<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type='text/css' rel='stylesheet' href='/DataStructureVisualizer/css/bootstrap.min.css' >
<script src='/DataStructureVisualizer/js/jquery-3.4.1.min.js'></script>
<script src='js/stack_function.js'></script>
<script src='/DataStructureVisualizer/js/bootstrap.min.js'></script>
<script>
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}




#index0,#i0{
 animation-name: index0;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
#index1,#i1{
 animation-name: index1;
  animation-duration: 1.25s;
  animation-iteration-count: 1;
}
#index2,#i2{
 animation-name: index2;
  animation-duration: 1.5s;
  animation-iteration-count: 1;
}
#index3,#i3{
 animation-name: index3;
  animation-duration: 1.75s;
  animation-iteration-count: 1;
}
#index4,#i4{
 animation-name: index4;
  animation-duration: 2s;
  animation-iteration-count: 1;
}
#index5,#i5{
 animation-name: index5;
  animation-duration: 2.25s;
  animation-iteration-count: 1;
}
#index6,#i6{
 animation-name: index6;
  animation-duration: 2.5s;
  animation-iteration-count: 1;
}
#index7,#i7{
 animation-name: index7;
  animation-duration: 2.75s;
  animation-iteration-count: 1;
}
#index8,#i8{
 animation-name: index8;
  animation-duration: 3s;
  animation-iteration-count: 1;
}
#index9,#i9{
 animation-name: index9;
  animation-duration: 3.25s;
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



.sidenav {
  height: 100%;
  width: 230px;
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
  font-size: 24px;
  color: white;
  display: block;
}

.sidenav a:hover {
  color: white;
font-size:28px;
}
#creation {
   position:fixed;
    top: 40%;
    left: 80%;
    width:33em;
    height:4em;
    margin-top: -9em; /*set to a negative number 1/2 of your height*/
    margin-left: -15em; /*set to a negative number 1/2 of your width*/
    display: inline-block;
 
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


.main {
  margin-left: 230px; /* Same as the width of the sidenav */
  font-size: 28px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}
#index0,#index1,#index2,#index3,#index4,#index5,#index6,#index7,#index8,#index9 {  
display:flex;
align-items:center;
justify-content:center;
    width: 70px;
    height: 50px;
    margin: 1px;
    background-color: #A0A0A0;
    border: 2px solid #800000;
}
 #i0,#i1,#i2,#i3,#i4,#i5,#i6,#i7,#i8,#i9{
display:flex;
align-items:center;
justify-content:center;
    width: 10px;
    height: 50px;
    margin: 1px;
font-size:15px;
}
#t0,#t1,#t2,#t3,#t4,#t5,#t6,#t7,#t8,#t9{
display:flex;
align-items:center;
justify-content:center;
    width: 50px;
    height: 50px;
    margin: 1px;
font-size:15px;
}
#top{
display:flex;
align-items:center;
justify-content:center;
width: 70px;
height: 70px;
background-color: powderblue;
border: 4px solid black;
}




#top {
 position:fixed;
      top:0;
      margin-top:260px;
      margin-left:-0px;
      -webkit-animation:bounce 1s infinite;
      animation-play-state: paused;
    }
    
    @-webkit-keyframes bounce {
      0%       { top:5px; }
      25%, 75% { top:15px; }
      50%      { top:20px; }
      100%     {top:0;}
    }




@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
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



</style>
</head>
<body>

<div class="sidenav">
<a href="index.jsp"><button class="btn"><i class="fa fa-home"></i> Home</button></a>
<h1 style="color:white;">STACK</h1>
<a href="#pushModal" id='push' data-toggle="modal" onclick="pushModel()"> PUSH</a>
<a href="#" id='pop' data-toggle="modal" onclick="popFunction()">POP</a>
<a href="#" id='clearStack' data-toggle="modal" onclick="clearStackFunction()">CLEAR STACK</a>
</div>


<div class="main">
<H1 id="heading">STACK - Last In First Out (LIFO)</H1> 
<H3 id='tc'>TIME COMPLEXITY :O(1)</H3><br><br><br>
<b>TOP</b><div id="top">-1</div><br><br><br><br>
<b><div id="txtBox"></div></b>
<div class="container" id="creation" >


 <div class="col">
<br><br>
 <div class="row"><div id="t9"></div><div class="col-sm-1" style="background-color:lavender;" id="index9"  ><p9 id="dp9"></p9></div><div id="i9">9</div></div>
 <div class="row"><div id="t8"></div><div class="col-sm-1" style="background-color:lavenderblush;" id="index8"  ><p8  id="dp8"></p8></div><div id="i8">8</div></div>
 <div class="row"><div id="t7"></div><div class="col-sm-1" style="background-color:lavender;" id="index7"  ><p7 id="dp7"></p7></div><div id="i7">7</div></div>
 <div class="row"><div id="t6"></div><div class="col-sm-1" style="background-color:lavenderblush;" id="index6"  ><p6  id="dp6"></p6></div><div id="i6">6</div></div>
 <div class="row"><div id="t5"></div><div class="col-sm-1" style="background-color:lavender;" id="index5"  ><p5 id="dp5"></p5></div><div id="i5">5</div></div>
 <div class="row"><div id="t4"></div><div class="col-sm-1" style="background-color:lavenderblush;" id="index4"  ><p4 id="dp4"></p4></div><div id="i4">4</div></div>
 <div class="row"><div id="t3"></div><div class="col-sm-1" style="background-color:lavender;" id="index3"  ><p3 id="dp3"></p3></div><div id="i3">3</div></div>
 <div class="row"><div id="t2"></div><div class="col-sm-1" style="background-color:lavenderblush;" id="index2"  ><p2 id="dp2"></p2></div><div id="i2">2</div></div>
 <div class="row"><div id="t1"></div><div class="col-sm-1" style="background-color:lavender;" id="index1" ><p1 id="dp1"></p1></div><div id="i1">1</div></div>
 <div class="row"><div id="t0"></div><div class="col-sm-1" style="background-color:lavenderblush;" id="index0" ><p0 id="dp0"></p0></div><div id="i0">0</div></div>
  </div>







 
  </div>



</div>






<div class="modal fade" id="pushModal" tabindex="-1" role="dialog" aria-labelledby="pushModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="pushModalLabel">PUSH </h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
   <small>Enter an element to push</small>
        <input type="number" class="form-control" id="pushElement" name=pushElement" placeholder="ENTER NUMBER">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
   <button type="button" class="btn btn-primary" class="close" data-dismiss="modal" onclick="pushFunction()">PUSH</button>
      </div>
    </div>
  </div>
</div>
</body>
</html> 












