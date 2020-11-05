<!DOCTYPE HTML>
<html>
<head>
<script src='js/Button.js'></script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link type='text/css' rel='stylesheet' href='/DataStructureVisualizer/css/bootstrap.min.css' >
<script src='/DataStructureVisualizer/js/jquery-3.4.1.min.js'></script>
<script src='/DataStructureVisualizer/js/bootstrap.min.js'></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

<style>
.button {
  background-color: #282828;
  color: white;
width: 180px;
  height: 80px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
border-radius: 12px;
border: 3px solid white;
 transition: width 2s;
}

.ml2 {
  font-weight: 500;
  font-size: 3.5em;
}

.ml2 .letter {
  display: inline-block;
  line-height: 1em;
}

.content {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 20px;
  min-height: 100%;
}

#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
width:50px;
  min-width: 100%; 
  min-height: 100%;
}

.button:hover {
  width: 300px;
border: 5px solid blue;
}



.ml8:hover {
border: 3px solid white;
}

h3{
  font-weight: 400;
  margin: 1em 0;
}
h3 { font-size: 50px solid}



</style>
</head>
<body>

<video autoplay muted loop id="myVideo">
  <source src="lap.mp4" type="video/mp4">
  Your browser does not support HTML5 video.
</video>
<div class="content">
<H2 class="ml2"> VisuAlgo - DATA STRUCTURE VISUALIZER </H2>
<h3>
 <b> <span
     class="txt-rotate"
     data-period="2000"
     data-rotate='["Data Structure Is Not Everybody`s Cup Of Tea.","While(!(Succeed=try()));","Coding Is Fun.", "Learn Today And Lead Tomorrow.", "Be the Exception." ]'></b></span>
</h3>

<div id="array" ><a href="array.jsp"><button type=Button id="array" class="button"> <b>ARRAY </b></button></a></div>
<div id="stack" ><a href="stack.jsp"><button type=Button id="stack" class="button"><b>STACK</b></button></a></div>
<div id="queue" ><a href="#queueModal" data-toggle="modal"><button type =Button id="queueButton" class="button"><b>QUEUE</b></button></a></div>
<div id="linkedList" ><a href="linkedList.jsp"><button type=Button id="linkedList" class="button"><b> LINKED LIST </b></button></a></div>
</div>

<div class="modal fade" id="queueModal" tabindex="-1" role="dialog" aria-labelledby="queueModalLabel"
  aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <p class="modal-title" id="queueModalLabel">SELECT QUEUE</p>
    <button type="button" class="close" data-dismiss="modal" aria-label="close">&times; </button>
      </div>
      <div class="modal-body">
<a href="queue.jsp"><button type="button" class="btn btn-primary" >QUEUE</button></a>
<a href="cqueue.jsp"><button type="button" class="btn btn-primary" >CIRCULAR QUEUE</button></a>
<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>      
</div>
      <div class="modal-footer">
        
      </div>
    </div>
  </div>
</div>



<script>

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    //opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 3) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 2px solid black }";
  document.body.appendChild(css);
};




</script>

</body>

</html>














