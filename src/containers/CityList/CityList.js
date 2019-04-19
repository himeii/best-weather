import React, {Component} from 'react';
import CityPill from "../../components/CityPill/CityPill";
import GiantPill from "../../components/CityPill/GiantPill";

class CityList extends Component {
    render() {
        const {top, gender} = this.props;
        const [leader, ...rest] = top;
        return (
            <div>
                <h1 className="text-center text-pink">Best place for a {gender === 'male' ? 'man' : 'woman'} to be at this very moment!</h1>
                <GiantPill data={leader}/>
                <h2 className="text-center text-pink my-4">And other ones, not much worse...</h2>

                <div className="flex flex-wrap">
                    {rest.map(city => <CityPill key={city.rank+city.name} data={city}/>)}
                </div>
            </div>
        );
    }
}

export default CityList;