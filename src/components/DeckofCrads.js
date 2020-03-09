import React from 'react'
import './carddeck.css';
function DeckofCrads(){

    const suits = ["♠︎", "♥︎", "♣︎", "♦︎"];
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
     let cards=[];
     let drawncards=[];
     let card='';
     for (let suit in suits) {
      for (let value in values) {
        drawncards.push(`${values[value]} of ${suits[suit]}`);
      }
      cards.push(drawncards)
    }
    console.log (drawncards)
    const generatedeck=()=>{
    
      card=drawncards.pop();
      console.log(card);
      return(<div>{card}</div>) ;
    }
  return (  

      <div>
        <button className='btn' onClick={generatedeck}>click to draw a card</button>
        <div className='tcard'>{card}</div>

      </div>)
}

export default DeckofCrads