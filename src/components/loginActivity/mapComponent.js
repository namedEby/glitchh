import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {lat: 40.73, lng: -73.93}, 
    zoom: 12
 }

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact 
   defaultCenter={this.props.center}
   center={this.state.center}
   defaultZoom={this.props.zoom}
   onChildMouseEnter={this.onChildMouseEnter}
   onChildMouseLeave={this.onChildMouseLeave}
/>
    </div>
  );
}