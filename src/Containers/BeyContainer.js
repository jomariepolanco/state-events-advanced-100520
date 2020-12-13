import React from "react";
import BeyCard from '../Components/BeyCard'


class BeyContainer extends React.Component {

  renderBeyCards = () => {
    return this.props.cards.map(bey => <BeyCard key={bey.id} beyObj={bey} handleClick={this.props.handleClick} toggleCardFavorites={this.props.toggleCardFavorites} />)
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
