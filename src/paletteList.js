import React, { Component } from 'react';

class PaletteList extends Component {
    render() {
        const { palette } = this.props;
        // console.log(this.props.palette)
        return (
            <div>
                <h1>React Colors</h1>
                {palette.map((palettes) => <h1>{palettes.paletteName}</h1>)}
            </div>
        )
    }
}

export default PaletteList;