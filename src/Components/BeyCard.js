import React from "react";

class BeyCard extends React.Component{

  handleClick = () => {
    this.props.toggleCardFavorites(this.props.beyObj.id)
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
