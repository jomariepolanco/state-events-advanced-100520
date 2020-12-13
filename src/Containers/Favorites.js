import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  renderFavorites = () => {
      return this.props.favoriteCards.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} addCardToFavorites={this.props.addCardToFavorites}/>)
  }

  render() {
    // console.log(this.props.favoriteCard, "in favorites")
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.favoriteCard !== {} ? this.renderFavorites() : null}
      </div>
    );
  }
}
