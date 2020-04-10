var context;

function initiate(){
  var mybuffer;
  var button = document.getElementById("button");
  button.addEventListener("click",()=>{
    play(mybuffer);
  },false)

  context = new AudioContext();

  var url = "./gunshot.m4a";
  var request = new XMLHttpRequest();
  request.responseType = "arraybuffer";
  request.addEventListener("load",()=>{
    if(request.status == 200){
      context.decodeAudioData(request.response, (buffer)=>{
        mybuffer = buffer;
        button.disabled = false;
      });
    }
  },false);
  request.open("GET",url,true);
  request.send();
}

function play(mybuffer){
  var sourceNode = context.createBufferSource();
  sourceNode.buffer = mybuffer;
  var volumeNode = context.createGain();
  volumeNode.gain.value = 0.2;
  sourceNode.connect(volumeNode);
  volumeNode.connect(context.destination);
  sourceNode.start(0);
}


document.addEventListener("DOMContentLoaded",()=>{
  document.getElementById("init").addEventListener("click",initiate);
},false)
