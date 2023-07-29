// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="bg-container">
        <div className="middle-container">
          <h1 className="heading">
            Bob ate {mangoCount} mangoes {bananaCount} bananas
          </h1>

          <div className="img-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
          </div>

          <div className="button-container">
            <button className="button " type="button" onClick={this.onMango}>
              Eat Mango
            </button>
            <button className="button" type="button" onClick={this.onBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
