import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'

class BeyContainer extends React.Component {

  renderBeyCards = () => {
    return beyArray.map(bey => <BeyCard key={bey.id} beyObj={bey} handleClick={this.props.handleClick} addCardToFavorites={this.props.addCardToFavorites} />)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBeyCards()}
      </div>
    );
  }
}

export default BeyContainer;
