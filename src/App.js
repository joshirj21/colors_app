import React from 'react';
import Palette from "./Palette"
import seedColors from "./seedColors";
import GenerateColor from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import PaletteList from "./paletteList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    })
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <PaletteList palette={seedColors} />} />
        <Route exact path="/palette/:id" render={(routeProps) => <Palette {...GenerateColor(this.findPalette(routeProps.match.params.id))} />} />
      </Switch>
      // <div className="App" >
      //   <Palette {...GenerateColor(seedColors[4])} />
      // </div>
    );
  }
}

export default App;
