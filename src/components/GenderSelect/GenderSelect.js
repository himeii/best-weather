import React, {Component} from 'react';

class GenderSelect extends Component {
    render() {
        const {onClick, gender} = this.props;
        return (
            <div className="p-4">
                <Button onClick={onClick('male')} active={gender === 'male'}>Male</Button>
                <Button onClick={onClick('female')} active={gender === 'female'}>Female</Button>
            </div>
        );
    }
}

const Button = ({onClick, active, children}) => (
    <button className={`rounded mx-2 px-3 py-2 text-white font-extrabold outline-none ${active ? 'bg-pink-dark' : 'bg-pink'}`} onClick={onClick}>{children}</button>
);

export default GenderSelect;