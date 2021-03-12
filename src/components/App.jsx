import React, { useReducer, useContext } from "react";
import MapLeaflet from "./MapLeaflet";
import "./MapLeaflet.css";
import { mapReducer, MapContext } from "./MapContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MarkerList from "./MarkersList";
import { Marker } from "leaflet";
import User from "./User";

const App = () => {
  const [state, dispatch] = useReducer(mapReducer, {});
  const context = { state, dispatch };

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/markers">Liste markers</Link>
              </li>
              <li>
                <Link to="/user">Utilisateurs</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/user">
              <User />
            </Route>

            <MapContext.Provider value={context}>
              <Route path="/markers">
                <MarkerList />
              </Route>

              <Route exact path="/">
                <div id="mapid">
                  <MapLeaflet />
                </div>
              </Route>
            </MapContext.Provider>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
