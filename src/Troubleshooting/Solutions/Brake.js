import React from 'react';

export const SOLUTION_KEY_GRINDING = "grinding";
export const SOLUTION_KEY_SQUEALING = "squealing";
export const SOLUTION_KEY_PULL = "pull";
export const SOLUTION_KEY_HARD_PEDAL = "hard-pedal";
export const SOLUTION_KEY_SPONGY_PEDAL = "spongy-pedal";
export const SOLUTION_KEY_PULSATING_PEDAL = "pulsating-pedal";

export default class BrakeSolutions extends React.Component {
    render() {
        let solution = null;

        if (this.props.solutionKey === SOLUTION_KEY_GRINDING) {
            solution = <div>Here is what to do if your brakes are grinding!</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_SQUEALING) {
            solution = <div>Here is what to do if your brakes are squealing!</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_PULL) {
            solution = <div>Here is what to do if your brakes pull!</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_HARD_PEDAL) {
            solution = <div>Here is what to do if your brake pedal is hard!</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_SPONGY_PEDAL) {
            solution = <div>Here is what to do if your brake pedal is spongy!</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_PULSATING_PEDAL) {
            solution = <div>Here is what to do if your brake pedal is pulsating!</div>;
        }

        return solution;
    }
}