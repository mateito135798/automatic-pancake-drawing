function preload() {
classifier=ml5.imageClassifier('DoodleNet')
}

function setup() {
var canvas=createCanvas(280,280);
background("white");
canvas.mouseReleased(classifycanvas);
synth=window.speechSynthesis;


}

function draw() {
strokeWeight (12);
stroke(255, 115, 0);
if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY);

}
}
function cleanCanvas() {
    background("white");
}
function classifycanvas() {
    classifier.classify(canvas,no)
}

 function no(error,resultados) {
    if (error) {
        console.error(error);

    }
    console.log(resultados);                                                                                                                                                                                                                                                                                                        
document.getElementById("object").innerHTML="objeto: "+resultados[0].label;
utterThis = new SpeechSynthesisUtterance(resultados[0].label); synth.speak(utterThis)
 }
 
