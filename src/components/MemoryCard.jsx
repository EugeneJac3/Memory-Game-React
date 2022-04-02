import './MemoryCard.css'
import React from 'react'

class MemoryCard extends React.Component {

constructor(props){
    super(props);
    this.state = {isFlipped: false};
}

clickHandler(){
    this.setState({isFlipped: !this.state.isFLipped})
}

    render (){
        let memoryCardInnerClass = "MemoryCardInner"
    
    return (  

     
    <div className="MemoryCard" onClick={this.props.pickCard}>

            <div className={!this.props.isFlipped ? memoryCardInnerClass : "MemoryCardInner flipped"}>

                <div className="MemoryCardBack">
                    <img className="image" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="DC logo"></img>
                </div>

                <div className="MemoryCardFront">
                    {this.props.symbol}
                </div>

            </div>
    </div>

    );
    }
}
 
export default MemoryCard;