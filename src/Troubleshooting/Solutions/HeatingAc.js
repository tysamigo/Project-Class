import React from 'react';

export const SOLUTION_KEY_HEATING_AC_1 = "heating-ac-1";
export const SOLUTION_KEY_HEATING_AC_2 = "heating-ac-2";
export const SOLUTION_KEY_HEATING_AC_3 = "heating-ac-3";
export const SOLUTION_KEY_HEATING_AC_4 = "heating-ac-4";
export const SOLUTION_KEY_HEATING_AC_5 = "heating-ac-5";

export default class HeatingAcSolutions extends React.Component {
    render() {
        let solution = null;

        if (this.props.solutionKey === SOLUTION_KEY_HEATING_AC_1) {
            solution = <div>Heating and A/C Solution for Problem 1</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_HEATING_AC_2) {
            solution = <div>Heating and A/C Solution for Problem 2</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_HEATING_AC_3) {
            solution = <div>Heating and A/C Solution for Problem 3</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_HEATING_AC_4) {
            solution = <div>Heating and A/C Solutionn for Problem 4</div>;
        } else if (this.props.solutionKey === SOLUTION_KEY_HEATING_AC_5) {
            solution = <div>Heating and A/C Solution for Problem 5</div>;
        }

        return solution;
    }
}