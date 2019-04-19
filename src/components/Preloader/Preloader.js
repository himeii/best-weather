import React, {Component} from 'react';
import "./Preloader.css"

class Preloader extends Component {
    render() {
        const {loaded} = this.props;
        return (
            <div className={`preloader fixed h-screen w-screen flex justify-center items-center ${loaded ? "" : "visible"}`}>
                <div className="lds-css ng-scope">
                    <div style={{width:"100%",height:"100%"}} className="lds-ripple">
                        <div/>
                        <div/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;