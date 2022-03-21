var SpeechRecognition=window.webkitSpeechRecognition;
var x= document.getElementById("myAudiomemo");
var y=document.getElementById("myAudiolegends");
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
console.log(event);
var Content =event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML=Content;
console.log(Content);
if(Content=="take my selfie")
{
console.log("taking selfie---");
speak();
}
if(Content=="play"){
    soundmemo();
}
if(Content=="chat")
{
    window.location="https://mahdihat791.github.io/v2/kwitter/index.html";
}
if(Content=="question")
{
ask=document.getElementById("ask").value;
var link="https://www.google.com/search?q="+ask;
window.location=link;
}
}

function speak()
{
var synth=window.speechSynthesis;
speak_data="taking your selfie in 10 seconds";
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function()
{
take_snapshot();
save()  ;
},10000);
}
camera=document.getElementById("camera");
Webcam.set({
width:360,
height:250,
image_format:'jpeg',
jpeg_quality:90
});
function take_snapshot()
{
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML="<img id='selfie_image' src='"+data_uri+"'>";
});
}
function save()
{
link=document.getElementById("link");
image=document.getElementById("selfie_image").src;
link.href=image;
link.click();
}
function soundmemo()
{
x.play();
}
