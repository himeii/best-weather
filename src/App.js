import React, { Component } from 'react';

import {getWeatherWorldwide} from "./api";
import {getTopTen} from "./helpers";
import CityList from "./containers/CityList/CityList";
import GenderSelect from "./components/GenderSelect/GenderSelect";
import Preloader from "./components/Preloader/Preloader";

class App extends Component {

  state = {
    top: [],
    gender: "male",
    loaded: true
  };

  async componentDidMount() {
    await this.calculate()
  }

  toggleLoader = () => {
    this.setState(prevState => ({
      loaded: !prevState.loaded
    }))
  };

  calculate = async (gender = "male") => {
    this.toggleLoader();
    const result = await getWeatherWorldwide();
    this.toggleLoader();
    const top = getTopTen(result.data.list, gender==='female' ? 22 : 21);
    this.setState({top})
  };

  selectGender = (gender) => () => {
    this.setState({gender});
    this.calculate(gender)
  };

  render() {
    const {top, gender, loaded} = this.state;
    return (
        <div className="gradient">
          <div className="container mx-auto px-4">
            <Preloader loaded={loaded}/>
            <GenderSelect onClick={this.selectGender} gender={gender}/>
            <CityList gender={gender} top={top}/>
          </div>
        </div>
    );
  }
}


export default App;
