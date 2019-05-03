
import images from './img/*.png';
console.log(images.barbie);

let myData;
let moves = 0;
let turn = 0;
var card01;
var card02;
var counterCards = 0;
var flaggame=false;
var card02img=0;
var card01img=0;

//gestione dell'onclick
$( document ).ready(()=> {
    

    
    fetch("http://localhost:3000/memoryData")
        .then(result => {
            return result.json()
        })
        .then(data => {
        // Work with JSON data here
            myData = data;
            console.log(myData);
            createTable(myData); 
            $(".flip-card").click(
                
                function() {
                    if (!card01){
                        card01 = $(this);
                        $(card01).css("pointer-events","none");
                        counterCards++;
                        $( this ).addClass("flip-card-click");
                        $( this ).addClass("can-flip");
                         card01img = $(this).children().children('.flip-card-back').children().attr('data-cardvalue');
                        console.log(card01img); 
                        console.log(card01);
                        flaggame=true;

                        return;

                    }
                    else {
                        card02 = $(this);
                        $(card02).css("pointer-events","none");
                        counterCards++;
                        $( this ).addClass("flip-card-click");
                        $( this ).addClass("can-flip");
                        console.log("Questa è card2");
                         card02img = $(this).children().children('.flip-card-back').children().attr('data-cardvalue');
                        console.log(card02img); 
                        flaggame=true;
                    }
                    if(card01!=false && card02!=false && flaggame){
                       
                        if (card01img == card02img){
                            console.log("card1 e card2 sono girate e sono uguali");
                            $(".flip-card-click").removeClass("can-flip");
                            $(".flip-card-click").removeClass("flip-card");
                            $(".flip-card-click").addClass("flipped");
                            $(card02).css("pointer-events","none");
                            $(card01).css("pointer-events","none");
                            card01=false;
                            card02=false;
                        }
                        else if (card01img != card02img || counterCards>2){                         
                            console.log("card1 e card2 sono girate ma non sono uguali");
                            $("#table").css("pointer-events","none");//third card fippable fixing PART1 - if users click third card before animation time (0.5s) third card can flip otherwise third card can't
                            
                            counterCards =0;
        
                            setTimeout(function(){
                                $(".can-flip").removeClass("flip-card-click");
                                $(".can-flip").removeClass(".can-flip");
                                $(card01).css("pointer-events","auto");
                                $(card02).css("pointer-events","auto");
                                card01=false;
                                card02=false;
                                $("#table").css("pointer-events","auto"); //third card fippable fixing PART2
                            }, 1500);
                                
                        
                            
                        }
                    }
                    //checkForMatch();
                }
         
            );
        });


    
    
}); 
/*
function checkForMatch() {
    let isMatch = card1. === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

*/






function createTable(myData){
    //console.log(myData);
    let table = $('#table');
    //controllo che esistano righe e colonne
    if (myData.rowNum > 0 && myData.colNum > 0){
        //ciclo per le rows
        for(var i =0; i<myData.rowNum; i++){
            
            var row = '<div class = "row rounded  row'+i+'">';

            $('.row'+i)
            // ciclo per le columns
            for(var j =0; j<myData.colNum; j++){
                var col= '<div class = "col-sm rounded d-flex justify-content-center align-items-center col'+j+'"></div>';
                row += col;

            }
            row+='<div>';
            table.append(row);
        }
        fillTable(myData);
        //startGame();
    }
}

let deck2 = [];
function fillTable(myData){
    let table = $('#table');

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
   
    //clone storage.deck in deck2      
    deck2 = myData.deck.slice();
    //shuffle deck2
    shuffle(deck2);

    for (var i=0; i < myData.deck.length; i++){

        var rowNum = myData.deck[i].rowPos;
        var colNum = myData.deck[i].colPos;

        var row = table.find('.row'+rowNum);
        var col = row.find('.col'+colNum)

        var randomCardIndex = deck2[i].cardName; //fill table with deck2 (deck2 is a shuffled copy of myData.deck)
        //console.log(randomCardIndex)
        var cardI = myData.deck[randomCardIndex-1].imgCode;

        var nameOfCard = images[cardI];

        var htmlCard =
            `<div class="flip-card d-flex justify-content-center rounded">
                <div class="flip-card-inner rounded d-flex justify-content-center">
                    <div class="flip-card-front rounded ">
                        <img class="rounded mx-auto d-block" src="./dorso.e3878d79.png">
                    </div>
                    <div class="flip-card-back rounded">
                        <img data-cardvalue="`+nameOfCard+`" class="rounded mx-auto d-block " src= .`+ nameOfCard +`>
                    </div>
                </div>
            </div>`;
       
        col.append(htmlCard);
        //col.addClass('prova');
    }
}

