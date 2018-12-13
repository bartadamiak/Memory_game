import   React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import HONDA from '../images/Honda-logo.png';
import BMW from '../images/BMW-logo.png';
import FORD from '../images/Ford-logo.png';
import OPEL from '../images/Opel-logo.png';
import KIA from '../images/Kia-logo.png';
import MAZDA from '../images/Mazda-logo.png';
import MERCEDES from '../images/Mercedes-Benz-logo.png';
import NISSAN from '../images/Nissan-logo.png';
import PEUGEOT from '../images/Peugeot-logo.png';
import RENAULT from '../images/Renault-logo.png';
import SUBARU from '../images/Subaru-logo.png';
import TOYOTA from '../images/Toyota-logo.png';
import VOLKSWAGEN from '../images/Volkswagen-logo.png';
import VOLVO from '../images/Volvo-logo.png';
import PORSCHE from '../images/Porsche-logo.png';
import QUESTION from '../images/question.png'
import { setTimeout } from 'timers';



class Cards extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
       cards: [HONDA, BMW, FORD, OPEL, KIA, MAZDA, MERCEDES, NISSAN, PEUGEOT, RENAULT, SUBARU, TOYOTA, VOLKSWAGEN, VOLVO, PORSCHE,
           HONDA, BMW, FORD, OPEL, KIA, MAZDA, MERCEDES, NISSAN, PEUGEOT, RENAULT, SUBARU, TOYOTA, VOLKSWAGEN, VOLVO, PORSCHE],
       openedCards: [],
       counter: 0,
       timeFrame: [],
       time: 0
    


   }
   }


   handleClick = (e) => {
       e.preventDefault();
       this.setState({
        counter: this.state.counter +1,
        timeFrame: [...this.state.timeFrame, e.target]
       });

       

    
       if (this.state.openedCards.length < 2) {
        e.target.classList.add('opened')    
        e.target.classList.remove('question');
        e.target.firstElementChild.classList.remove('none');
        this.setState({
           openedCards: [...this.state.openedCards, e.target.firstElementChild],
           });
        }

        
    }

    componentDidMount(){
        setInterval(() => {
            if (this.state.timeFrame.length >= 1 && this.state.timeFrame.length <= 36) {
                this.setState({
                    time: this.state.time +1
                })
            }
        }, 1000);
        setInterval(() => {
            let divs = document.querySelectorAll('.opened')
            if (this.state.openedCards[0].src != this.state.openedCards[1].src) {
            divs[0].classList.add('question'), divs[0].firstElementChild.classList.add('none'), divs[1].classList.add('question'), divs[1].firstElementChild.classList.add('none'),
            divs[0].classList.remove('opened'), divs[1].classList.remove('opened'),
            this.setState({
                openedCards: []
            })
            }
            if (this.state.openedCards[0].src === this.state.openedCards[1].src) {
                divs[0].classList.remove('opened'), divs[1].classList.remove('opened'),
                this.setState({
                    openedCards: []
                })
                
            }
    
            }, 3000)
    }
  
    render(){
      let logos = this.state.cards.map((e,i) => {
          return <div className="question" onClick={this.handleClick}><img className="none" src={e} key={i}></img></div>
      })
      
     return (
         <div id='ok'>
         <div className='ok'>
             {logos}
         </div>
         <div className="counter">Kliknąłeś: {this.state.counter} </div>
         <div className="time">W czasie: {this.state.time} </div>
         
        



         </div>


     )
   }
 
   
   
}

    




 document.addEventListener('DOMContentLoaded', function(){
     ReactDOM.render(
         <><Cards/></>,
         document.getElementById('app')
     );
 });