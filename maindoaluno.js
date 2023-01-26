difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
    //Utilize o código 'createCapture' para criar a câmera de vídeo
  video = ???(VIDEO);
  //Utilize o código 'size' para definir o tamanho
  video.???(550, 500);

  //Crie um canva de 550 de largura e altura
 ???
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
  //Defina a cor de fundo
background('#???');
//Utilize o código que muda o html com javascript
  document.getElementById("font_size").??? = "Tamanho da fonte será = " + difference +"px";
textSize(difference);
//Escolha uma cor para o texto
fill('#???');
//Escreva o texto que você quer que apareça no canva
text('???', 50, 400);
}
