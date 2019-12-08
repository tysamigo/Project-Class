import React from 'react';

export const SOLUTION_KEY_ENGINE_1 = "engine-1";
export const SOLUTION_KEY_ENGINE_2 = "engine-2";
export const SOLUTION_KEY_ENGINE_3 = "engine-3";
export const SOLUTION_KEY_ENGINE_4 = "engine-4";
export const SOLUTION_KEY_ENGINE_5 = "engine-5";

export default class EngineSolutions extends React.Component {
    render() {
        let solution = null;

        if (this.props.solutionKey === SOLUTION_KEY_ENGINE_1) {
            solution = <div>Engine Solution for Problem 1</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_ENGINE_2) {
            solution = <div>Engine Solution for Problem 2</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_ENGINE_3) {
            solution = <div>Engine Solution for Problem 3</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_ENGINE_4) {
            solution = <div>Engine Solution for Problem 4</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_ENGINE_5) {
            solution = <div>Engine Solution for Problem 5</div>;
        }

        return solution;
    }
}