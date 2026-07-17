let captchaText = "";

function generateCaptcha(){

const chars =
"ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

captchaText="";

for(let i=0;i<6;i++){

captchaText += chars.charAt(
Math.floor(Math.random()*chars.length)
);

}

document.getElementById("captcha").innerHTML=captchaText;

}

function checkCaptcha(){

const userInput =
document.getElementById("captchaInput").value;

if(userInput===captchaText){

window.location.href="result.html";

}else{

document.getElementById("message").innerHTML=
"Invalid CAPTCHA";

generateCaptcha();

}

}

generateCaptcha();