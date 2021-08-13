import React, { useState } from "react";
import ReactDOM from "react-dom";

// notes for progress bar code I found 

// styling of the actual progress bar 
const containerStyle = {
    border: '1px solid silver',
    background: '#ededed'
};
// more styling (animation)
const contentStyle = {
    background: '#00cc00',
    height: '24px',
    textAlign: 'center',
    lineHeight: '24px',
    fontFamily: 'sans-serif',
    transition: '0.3s'
};

// this is the progress bar functionality 
export const ProgressBar = ({ progress }) => {
    const state = `${progress}%`;
    return (
        // this uses the styling (animation, actual bar itself) & puts it in with the function
        <div style={containerStyle}>
            <div style={{ ...contentStyle, width: state }}>
                {/* if progress is greater than 5 then set state (bc state is an empty string rn) */}
                {progress > 5 ? state : ''}
            </div>
        </div>
    );
};

export const ScareMeter = () => {
    // useState has the default value of the bar set at zero
    const [progress, setProgress] = React.useState(0);
    return (
        <div>
            <ProgressBar progress={progress} />
            <br />
            <div>
                {/* these buttons are what causes the state of the progress bar to change */}
                <button onClick={() => setProgress(0)}>Not Scary :|</button>
                <button onClick={() => setProgress(25)}>Has Its Moments</button>
                <button onClick={() => setProgress(50)}>Mediocre Scares :/</button>
                <button onClick={() => setProgress(75)}>Decent Scares</button>
                <button onClick={() => setProgress(100)}>MADE ME SCREAM :O</button>
            </div>
        </div>
    );
};
// rendering of the prog bar 
const root = document.querySelector('#root');
ReactDOM.render(<ScareMeter />, root);