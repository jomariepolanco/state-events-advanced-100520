import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api'

class App extends React.Component {

  state = {
    api: beyArray
  }

  addFavorites = (id) => {
    let newArr = [...this.state.api]
    let favObj = newArr.find(bey => bey.id === id)
    favObj.favorite = true 
    this.setState({api: newArr})
  }

  removeFavorites = (id) => {
    let newArr = [...this.state.api]
    let favObj = newArr.find(bey => bey.id === id)
    favObj.favorite = false
    this.setState({api: newArr})
    window.alert('I got hot sauce in my bag, swag')
  }
  favorites = () => {
    return [...this.state.api].filter(obj => obj.favorite)
  }


  render() {
    return (
      <div className="container" >
        <BeyContainer cards={this.state.api} toggleCardFavorites={this.addFavorites} />
        <Favorites cards={this.favorites()} toggleCardFavorites={this.removeFavorites}/>
      </div>
    );
  }

};

export default App;
