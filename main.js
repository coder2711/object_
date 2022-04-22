img = "";
obj = [];
status = "";

function preload(){
 img = loadImage('c.jpg');
}

function setup(){
    canvas = createCanvas(500 , 450);
    canvas.center();
    detector = ml5.objectDetector("cocossd" , loaded); 
    document.getElementById("status").innerHTML="Status = Loading Results";
}
function loaded(){
    console.log("loaded");
    detector.detect(img , gotResults);
    status = "true";
}

function draw(){
    image(img , 0 , 0 , 500 , 450);
    fill('##FF0000');
    if(status == "true"){
        for(i=0;i<obj.length;i++){
            document.getElementById("status").innerHTML="Status = Objects Detected";
                fill('#0000FF');
                percent = floor(obj[i].confidence*100);
                noFill();
                text(obj[i].label+" "+percent, obj[i].x+15 , obj[i].y +15);
                stroke('#0000FF');
                rect(obj[i].x , obj[i].y , obj[i].width , obj[i].height);
        }
    
    }   
}

function gotResults(error , results){
   if(error){
       console.error(error);
   }
   
   obj = results;
   console.log(results);
}