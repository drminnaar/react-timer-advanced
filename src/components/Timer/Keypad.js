import React from 'react';
import PropTypes from 'prop-types';

const Keypad = (props) => (
    <div>
        <div></div>
        {
            props.status === null &&
            <div className="keypad">
                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(1)}>1</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(2)}>2</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(3)}>3</button>
                </div>

                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(4)}>4</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(5)}>5</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(6)}>6</button>
                </div>

                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(7)}>7</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(8)}>8</button>
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(9)}>9</button>
                </div>

                <div className="keypad-row">
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(-1)}>
                        <i className="fa fa-close"></i>
                    </button>
                    
                    <button className="btn btn-light btn-sm" onClick={() => props.onClick(0)}>0</button>
                    
                    <button className="btn btn-light btn-sm">&nbsp;</button>
                </div>
            </div>
        }
    </div>
);

Keypad.defaultProps = {
    onClick: (e) => console.log(e),
    status: null
};

Keypad.propTypes = {
    onClick: PropTypes.func,
    status: PropTypes.string
};

export default Keypad;