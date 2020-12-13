import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'

class App extends React.Component {

  state = {favoriteBeyImages: []}

  addCardToFavorites = (beyObj) => {
    if (beyObj.favorite === true) {
      this.setState((prevState) => ({favoriteBeyImages: [...prevState.favoriteBeyImages, beyObj]}))
    } else {
      let newArray = this.state.favoriteBeyImages.filter(object => object.id !== beyObj.id)
      this.setState({favoriteBeyImages: newArray})
      window.alert('I got hot sauce in my bag, swag')
    }
  }

  render() {
    // console.log(this.state.favoriteBeyImages, "in app")
    return (
      <div className="container" >
        <BeyContainer addCardToFavorites={this.addCardToFavorites} />
        <Favorites favoriteCards={this.state.favoriteBeyImages} addCardToFavorites={this.addCardToFavorites}/>
      </div>
    );
  }

};

export default App;
