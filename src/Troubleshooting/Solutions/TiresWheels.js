import React from 'react';

export const SOLUTION_KEY_TIRES_WHEELS_1 = "tires-wheels-1";
export const SOLUTION_KEY_TIRES_WHEELS_2 = "tires-wheels-2";
export const SOLUTION_KEY_TIRES_WHEELS_3 = "tires-wheels-3";
export const SOLUTION_KEY_TIRES_WHEELS_4 = "tires-wheels-4";
export const SOLUTION_KEY_TIRES_WHEELS_5 = "tires-wheels-5";

export default class TiresWheels extends React.Component {
    render() {
        let solution = null;

        if (this.props.solutionKey === SOLUTION_KEY_TIRES_WHEELS_1) {
            solution = <div>Here is the solution for Tires & Wheels Problem 1</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_TIRES_WHEELS_2) {
            solution = <div>Here is the solution for Tires & Wheels Problem 2</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_TIRES_WHEELS_3) {
            solution = <div>Here is the solution for Tires & Wheels Problem 3</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_TIRES_WHEELS_4) {
            solution = <div>Here is the solution for Tires & Wheels Problem 4</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_TIRES_WHEELS_5) {
            solution = <div>Here is the solution for Tires & Wheels Problem 5</div>;
        }

        return solution;
    }
}