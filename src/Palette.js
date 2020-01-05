import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar"
import "./Palette.css"

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500, format: 'hex' }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this);
    }
    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }
    changeFormat(val) {
        this.setState({ format: val })
    }
    render() {
        const colorBoxes = this.props.colors[this.state.level].map(color => {
            console.log(color)
            return <ColorBox background={color[this.state.format]} name={color.name} />
        })
        return (
            <div className="Palette">
                <Navbar changeLevel={this.changeLevel} level={this.state.level} handleChange={this.changeFormat} />
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {/* {bunch of color boxes} */}
                    {colorBoxes}
                </div>
                {/* Footer goes here */}
            </div>
        )
    }
}

export default Palette;