let pwin = 0;
let cwin = 0;
let tie = 0;
let total = 0;

let player = " ";
let computer = " ";

let cc = 0;

function rock() {
    player = "Rock";
    rps_game();
    document.getElementById("pr").style.display = "block";
    document.getElementById("pp").style.display = "none";
    document.getElementById("ps").style.display = "none";
}

function paper() {
    player = "Paper";
    rps_game();
    document.getElementById("pp").style.display = "block";
    document.getElementById("pr").style.display = "none";
    document.getElementById("ps").style.display = "none";
}

function scissors() {
    player = "Scissors";
    rps_game();
    document.getElementById("ps").style.display = "block";
    document.getElementById("pp").style.display = "none";
    document.getElementById("pr").style.display = "none";
}

function rps_game(){
    total = total + 1;
    document.getElementById("total").textContent = total;
    computer_choose();
    if(total<7){
        who_win();
    }
    else{
        if(pwin==cwin){
            document.getElementById("win").textContent = "It's a Tie";
        }
        if(pwin>cwin){
            document.getElementById("win").textContent = "Player Wins";
        }
        if(pwin<cwin){
            document.getElementById("win").textContent = "Computer Wins";
        }

        document.getElementById("last").style.display = "flex";
        document.getElementById("yourwin").textContent = pwin ;
    }
}

function who_win(){
    if(player=="Rock"){
        if(computer=="Rock"){
            tie =tie + 1
        }
        if(computer == "Paper"){
            cwin = cwin  + 1;
        }
        if(computer == "Scissors"){
            pwin = pwin  + 1;
        }
        
    }
    if(player=="Paper"){
        if(computer=="Rock"){
            pwin = pwin  + 1;
        }
        if(computer == "Paper"){
            tie =tie + 1
        }
        if(computer == "Scissors"){
            cwin = cwin  + 1;
        }
        
    }
    if(player=="Scissors"){
        if(computer=="Rock"){
            cwin = cwin  + 1;
        }
        if(computer == "Paper"){
            pwin = pwin  + 1;
        }
        if(computer == "Scissors"){
            tie =tie + 1
        }
    }

    document.getElementById("pwin").textContent = pwin ;
    document.getElementById("cwin").textContent = cwin ;
    document.getElementById("tie").textContent = tie ;
}

function computer_choose(){
    cc = Math.floor(Math.random() * 3 + 1);

    if(cc==1){
        computer = "Rock";
        document.getElementById("cp").style.display = "none";
        document.getElementById("cr").style.display = "block";
        document.getElementById("cs").style.display = "none";
    }

    if(cc==2){
        computer = "Paper";
        document.getElementById("cp").style.display = "block";
        document.getElementById("cr").style.display = "none";
        document.getElementById("cs").style.display = "none";
    }

    if(cc==3){
        computer = "Scissors";
        document.getElementById("cp").style.display = "none";
        document.getElementById("cr").style.display = "none";
        document.getElementById("cs").style.display = "block";
    }
}

function restart() {

    pwin = 0;
    cwin = 0;
    tie = 0;
    total = 0;

    player = " ";
    computer = " ";

    document.getElementById("last").style.display = "none";
    document.getElementById("total").textContent = total;
    document.getElementById("pwin").textContent = pwin;
    document.getElementById("cwin").textContent = cwin;
    document.getElementById("tie").textContent = tie;


    document.getElementById("pp").style.display = "none";
    document.getElementById("pr").style.display = "none";
    document.getElementById("ps").style.display = "none";


    document.getElementById("cp").style.display = "none";
    document.getElementById("cr").style.display = "none";
    document.getElementById("cs").style.display = "none";

}