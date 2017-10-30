import React, { Component } from 'react';
import Layout from './Layout'
import WilksAppBar from './AppBar'
import WilksOutput from './WilksOutput'
import GenderInput from './GenderInput'
import BodyweightInput from './BodyWeightInput'
import LiftedweightInput from './LiftedWeightInput'

class WilksPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gender: 'male',
            bodyweight: '80',
            liftedweight: '0',
            wilkspoints: '0'
        }
    }

    wilksFormula = (m, a, b, c, d, e, f) => (500 / (a + b * m + c * m * m + d * m * m * m + e * m * m * m * m + f * m * m * m * m * m))

    calculateWilksPoints = () => {

        this.setState({ wilkspoints: '0' }, ()=>{
        let bodyweight = parseInt(this.state.bodyweight)
        let liftedweight = parseInt(this.state.liftedweight)        

        if (bodyweight > 0 && liftedweight > 0) {
            let wilksCoefficient = 0
            this.state.gender === 'male' ? wilksCoefficient = this.wilksFormula(bodyweight, -216.0475144, 16.2606339, -0.002388645, -0.00113732, 7.01863E-06, -1.291E-08) : wilksCoefficient = this.wilksFormula(bodyweight, 594.31747775582, -27.23842536447, 0.82112226871, -0.00930733913, 0.00004731582, -0.00000009054)
            let wilkspoints = wilksCoefficient * liftedweight
            this.setState({ wilkspoints: wilkspoints })
        }
    })
    }

    updateInput = (state) => {
        this.setState(state, this.calculateWilksPoints)
    }

    handleGenderChange = (event, value) => {
        let state = { gender: value }
        this.updateInput(state)
    }

    handleBodyweightChange = (event) => {
        let value = event.target.value
        let state = { bodyweight: value }
        this.updateInput(state)
    }

    handleLiftedweightChange = (event) => {
        let value = event.target.value
        let state = { liftedweight: value }
        this.updateInput(state)
    }

    render() {
        const {
            gender,
            bodyweight,
            liftedweight,
            wilkspoints
        } = this.state
        const handleGenderChange = this.handleGenderChange
        const handleBodyweightChange = this.handleBodyweightChange
        const handleLiftedweightChange = this.handleLiftedweightChange

        let output
        wilkspoints > 0 ? output = WilksOutput(wilkspoints) : output = null

        return (<Layout
            appbar={WilksAppBar()}
            bodyweightinput = {BodyweightInput(bodyweight, handleBodyweightChange)}
            liftedweightinput = {LiftedweightInput(liftedweight, handleLiftedweightChange)}
            genderinput={GenderInput(gender, handleGenderChange)}
            output={output}
        />)
    }
}
export default WilksPage