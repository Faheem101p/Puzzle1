const sequence = [
"reproduce",
"inspect",
"logs",
"breakpoint",
"config",
"fix",
"verify"
];

let currentStep = 0;

function log(msg){
document.getElementById("log").innerHTML += "> " + msg + "<br>";
}

function resetSystem(reason){
currentStep = 0;

let logBox = document.getElementById("log");
logBox.innerHTML = "";

log("RESET: " + reason);
log("Hint: Start from reproducing the issue");
}

function step(action){

document.getElementById("success").classList.add("hidden");

if(action !== sequence[currentStep]){
resetSystem("Incorrect debugging step");
return;
}

currentStep++;


switch(action){

case "reproduce":
log("Issue reproduced successfully");
break;

case "inspect":
log("Network requests analyzed");
break;

case "logs":
log("Error logs identified");
break;

case "breakpoint":
log("Breakpoint set, execution paused");
break;

case "config":
log("Configuration validated");
break;

case "fix":
log("Fix applied to code");
break;

case "verify":
log("Verifying fix...");
log("System stable");
break;

}

if(currentStep === sequence.length){

document.getElementById("success").classList.remove("hidden");

}



}
