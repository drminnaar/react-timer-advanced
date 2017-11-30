import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => (
    <div>
        <div className="controls">
            {
                props.status !== 'STARTED' &&
                props.status !== 'STOPPED' &&
                <button className="btn btn-success btn-lg btn-block"
                    onClick={props.onStart}
                    disabled={!props.canStart}>
                    START
                </button>
            }
            {
                (props.status === 'STARTED' || props.status === 'STOPPED') &&
                <div className="controls">
                    {
                        props.status === 'STARTED' &&
                        <button className="btn btn-danger btn-lg"
                            onClick={props.onStop}>
                            STOP
                        </button>
                    }
                    {
                        props.status === 'STOPPED' &&
                        <button className="btn btn-success btn-lg"
                            onClick={props.onResume}>
                            RESUME
                        </button>
                    }
                    <button className="btn btn-primary btn-lg"
                        onClick={props.onReset}>
                        RESET
                    </button>
                </div>
            }
        </div>
    </div>
);

Controls.defaultProps = {
    onStart: () => console.log('CONTROLS: START'),
    onStop: () => console.log('CONTROLS: STOP'),
    onResume: () => console.log('CONTROLS: RESUME'),
    onReset: () => console.log('CONTROLS: RESET'),
    canStart: false,
    status: null
};

Controls.propTypes = {
    onStart: PropTypes.func,
    onStop: PropTypes.func,
    onReset: PropTypes.func,
    onResume: PropTypes.func,
    canStart: PropTypes.bool,
    status: PropTypes.string
};

export default Controls;