import React from "react";

class BeyCard extends React.Component{

  handleClick = () => {
    this.props.beyObj.favorite = !this.props.beyObj.favorite
    this.props.addCardToFavorites(this.props.beyObj)
  }
  
  render(){
    return (
      <div className="card">
        <h3>{this.props.beyObj.name}</h3>
        <img alt="beyonce" src={this.props.beyObj.img} onClick={this.handleClick} />
      </div>
    );
  }
};

export default BeyCard;
