import React, {Component} from 'react';
import "./Pills.css"

class CityPill extends Component {

    render() {
        const {data = {}}= this.props;
        const {name, humidity, temp} = data;
        return (
            <div className="px-4 py-2">
                <div className="pill shadow-md p-3 rounded bg-white">
                    <div className="font-extrabold text-2xl mb-2">
                        {name}
                    </div>
                    <div>
                    <div className="text-xl mb-2">Temperature is <span className="font-extrabold">{temp}&#8451;</span> </div>
                        <p className="align-middle">
                            Humidity is at <span className="text-xl font-extrabold">{humidity}%</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CityPill;