
let deck = ["5 of Spades", "Ace of Diamonds", "Jack of Diamonds", "7 of Hearts", "3 of Clubs", "3 of Spades"];
//let deck = ["King of Clubs"];
//let deck = ["Ace of Diamonds", "King of Clubs", "9 of Spades", "4 of Spades", "3 of Hearts"]
let players = [
  { "Name": "Nathan",
    "Deck": [],
    "Discard": []
  },
  { "Name": "Casey",
    "Deck": [],
    "Discard": []
  }
];
console.log(war(deck, players));


function war(deck , players ){
   
    let suits =[];
    let values = []        
    let player1hand = [];
    let player2hand = [];
    let discardplayer1 =[];
    let discardplayer2 =[];


if(deck.length < 2){
    players[0].Deck = deck[0];

return (players[0])
    
}


    for (let i = 0; i < deck.length; i++) { 
    const breakdown = deck[i].split(" ")
    values [i] = breakdown[0];
    suits [i] = breakdown[2];
}
   
   
    for (let k = 0; k< deck.length; k++){

        let fullhand = {};
        fullhand.Suits = suits[k];
        fullhand.Value = values[k]

        if(isEven(k)){
           
            player1hand.push(fullhand);
           
       }
       else 
        player2hand.push(fullhand);
    }



let playerwins1 = 0;
let playerwins2 =0;
let accuraterounds = deck.length;

if(!isEven(deck.length)){
    accuraterounds = deck.length - 1
}

for (let l = 0; l < accuraterounds/2; l++){
 
    let stringbuilder;
    let stringbuilder2;

    let firstVal = ReturnNum(player1hand[l].Value);
    let secondVal = ReturnNum(player2hand[l].Value);
    
 if ( firstVal == secondVal){
         if (compareSuits(player1hand[l].Suits,player2hand[l].Suits)){

        stringbuilder = BuildHelper(player1hand[l].Value, player1hand[l].Suits)
        stringbuilder2 = BuildHelper(player2hand[l].Value, player2hand[l].Suits)

        discardplayer1.push(stringbuilder)
        discardplayer1.push(stringbuilder2)

        playerwins1++

         }
         if(!(compareSuits(player1hand[l].Suits,player2hand[l].Suits))){
        stringbuilder = BuildHelper(player1hand[l].Value, player1hand[l].Suits)
        stringbuilder2 = BuildHelper(player2hand[l].Value, player2hand[l].Suits)

        discardplayer2.push(stringbuilder)
        discardplayer2.push(stringbuilder2)  
        playerwins2++;
         }
    }

    if(firstVal > secondVal){
       
       
        stringbuilder = BuildHelper(player1hand[l].Value, player1hand[l].Suits)
        stringbuilder2 = BuildHelper(player2hand[l].Value, player2hand[l].Suits)

        discardplayer1.push(stringbuilder)
        discardplayer1.push(stringbuilder2)


        playerwins1++;

      
    }
    
   if( firstVal < secondVal){
        stringbuilder = BuildHelper(player1hand[l].Value, player1hand[l].Suits)
        stringbuilder2 = BuildHelper(player2hand[l].Value, player2hand[l].Suits)

        discardplayer2.push(stringbuilder)
        discardplayer2.push(stringbuilder2)
    playerwins2++

       

    }


}



players[0].Discard = discardplayer1;
players[1].Discard = discardplayer2;
if(playerwins1 > playerwins2){
    return players[0];
}
else{
    return players[1];

}


}

function ReturnNum(number){

    switch(number){
        case '1': return 1;
        case '2': return 2;
        case '3': return 3;
        case '4': return 4;
        case '5': return 5;
        case '6': return 6;
        case '7': return 7;
        case '8': return 8;
        case '9': return 9;
        case '10': return 10;
        case 'Jack': return 11;
        case 'Queen': return 12;
        case 'King': return 13;
        case "Ace": return 14; 
    }

}
function isEven(value){
    if(value%2 == 0){
        return true;
    }
    else return false;
}

function BuildHelper(val, suit){
    return " "+ val + " of " + suit;
}
function compareSuits(first, second){
   let play1 = returnSuit(first);
   let play2 = returnSuit(second);

        if(play1 == play2){
            return false;
        }

    if(play1 < play2)
        return true;
    else if (play1 > play2){
            return false;
    }



}
function returnSuit(suit){

switch(suit){
        case 'Clubs': return 1;
        case 'Spades': return 2;
        case 'Hearts': return 3;
        case 'Diamonds': return 4;
    }
}