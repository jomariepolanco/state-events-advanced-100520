import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

export default class Favorites extends Component {

  renderFavorites = () => {
      return this.props.cards.map(beyObj => <BeyCard key={beyObj.id} beyObj={beyObj} toggleCardFavorites={this.props.toggleCardFavorites}/>)
  }

  render() {
    // console.log(this.props.cards, "in favorites")
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.favoriteCard !== {} ? this.renderFavorites() : null}
      </div>
    );
  }
}
