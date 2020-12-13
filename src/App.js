import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'
import beyArray from './api'

class App extends React.Component {

  state = {
    api: beyArray
  }

  toggleCardFavorites = (id) => {
    // console.log(beyObj)
    let newArr = [...this.state.api]
    let favObj = newArr.find(bey => bey.id === id)

    if (favObj.favorite === false) {
      favObj.favorite = true 
      this.setState((prevState) => ({api: newArr}))
    } else if (favObj.favorite === true) {
      favObj.favorite = false
      this.setState({api: newArr})
      window.alert('I got hot sauce in my bag, swag')
    }
  }

  favorites = () => {
    return [...this.state.api].filter(obj => obj.favorite)
  }

  // notFavorites = () => {
  //   return [...this.state.api].filter(obj => obj.favorite === false)
  // }

  render() {
    // console.log(this.notFavorites())
    return (
      <div className="container" >
        <BeyContainer cards={this.state.api} toggleCardFavorites={this.toggleCardFavorites} />
        <Favorites cards={this.favorites()} toggleCardFavorites={this.toggleCardFavorites}/>
      </div>
    );
  }

};

export default App;
