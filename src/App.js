import React from 'react';
import "./App.css";
import { Marker ,withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

function Map () {
  return(
    < GoogleMap
      defaultZoom = {15}
      defaultCenter = {{ lat : -20.606356, lng : -41.201441}} 
    >

      < Marker 
        onClick = {function funcao() {
          funcao2(
            this.getPosition()
          );
        }}
        position = {{ lat : -20.606356, lng : -41.201441}}
      />

    </ GoogleMap>
  );
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{margin: '0 auto', width:'80vw', height:'100vh'}}>
      <h1 class="tittle">React and Google Maps</h1>
      <WrappedMap 
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqbsMLA-NxlHO5mz4JoLjwO9QFw2PTQ5U&callback=initMap'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `80vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

function funcao2(p) {
  alert("Posição (Latitude, Longitude)|"+p);
}
