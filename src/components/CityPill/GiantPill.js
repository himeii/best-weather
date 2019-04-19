import React, {Component} from 'react';
import "./Pills.css"

class GiantPill extends Component {
    render() {
        const {data}= this.props;
        if (!data) return null;
        const {name, humidity, temp} = data;
        return (
            <div className="p-4">
                <div className="pill shadow-md p-6 rounded">
                <div className="font-extrabold text-5xl mb-5">{name}</div>
                    <div className="text-3xl mb-2">Temperature is <span className="font-extrabold">{temp}&#8451;</span> </div>
                    <div className="text-2xl"> Humidity is at <span className="font-extrabold">{humidity}%</span></div>
                </div>
            </div>
        );
    }
}

export default GiantPill;