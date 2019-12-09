import React from 'react';

export const SOLUTION_KEY_STEERING_HANDLING_1 = "steering-1";
export const SOLUTION_KEY_STEERING_HANDLING_2 = "steering-2";
export const SOLUTION_KEY_STEERING_HANDLING_3 = "steering-3";
export const SOLUTION_KEY_STEERING_HANDLING_4 = "steering-4";
export const SOLUTION_KEY_STEERING_HANDLING_5 = "steering-5";

export default class SteeringHandling extends React.Component {
    render() {
        let solution = null;

        if (this.props.solutionKey === SOLUTION_KEY_STEERING_HANDLING_1) {
            solution = <div>Here is the solution for Steering & Handling Problem 1</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_STEERING_HANDLING_2) {
            solution = <div>Here is the solution for Steering & Handling Problem 2</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_STEERING_HANDLING_3) {
            solution = <div>Here is the solution for Steering & Handling Problem 3</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_STEERING_HANDLING_4) {
            solution = <div>Here is the solution for Steering & Handling Problem 4</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_STEERING_HANDLING_5) {
            solution = <div>Here is the solution for Steering & Handling Problem 5</div>;
        }

        return solution;
    }
}