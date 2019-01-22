window.onload = function() {
    // Variables's initialization 
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = new Array();
    var guessesIndex = 0;
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var guessLetter = "";
    var keyPressed = "";


    function restartVariables(){
        wins = 0;
        losses = 0;
        guessesLeft = 9;
        guessesSoFar = new Array();
        guessesIndex = 0;
        alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        guessLetter = "";
        keyPressed = "";
    }

    function chooseLeter(){
        //Setting value of guessLetter ramdonly
        guessesIndex = Math.floor(Math.random() * alphabet.length);
        guessLetter = alphabet[guessesIndex];
        console.log(guessLetter + " Letra escogida por la PC");
    }

    function restartValues(){
        //Restartting HTML Values
        document.getElementById("win").value = wins;
        document.getElementById("lose").value = losses;
        document.getElementById("guessLeft").value = guessesLeft;
        document.getElementById("guessSoFar").value = guessesSoFar;
    }

    chooseLeter();
    restartValues();

    document.getElementById("reset").onclick = function(){
        document.getElementById("losess").hidden = true;
        document.getElementById("winss").hidden = true; 
        restartVariables(); 
        restartValues(); 
        chooseLeter();
    };

    document.onkeyup = function(event) {  
        document.getElementById("losess").hidden = true;
        document.getElementById("winss").hidden = true; 
        keyPressed = event.key.toString();
        if (keyPressed.match("[a-zA-Z]") && keyPressed.length === 1) {//Only letters between a-z or A-Z are allowed
            if(keyPressed === guessLetter || keyPressed === guessLetter.toUpperCase()) {//User wins
                wins += 1;
                guessesSoFar = []; 
                guessesLeft = 9;
                document.getElementById("losess").hidden = true;
                document.getElementById("winss").hidden = false;
                chooseLeter();
                restartValues();
            }else{
                if(!guessesSoFar.includes(keyPressed)){//User fail but still doesn't lose
                    guessesLeft -= 1
                    guessesSoFar.push(keyPressed);
                    
                    restartValues();
                    if(guessesLeft === 0){//User loses
                        document.getElementById("winss").hidden = true;
                        document.getElementById("losess").hidden = false;
                        guessesLeft = 9;
                        guessesSoFar = []; 
                        losses += 1;
                        restartValues();
                        chooseLeter();
                    }
                }                
            }
        }   
    }
}