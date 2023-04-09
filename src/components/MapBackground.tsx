import React, { useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { LatLng }  from "react-native-maps";
import Geocoder from "react-native-geocoding";

let {height, width} = Dimensions.get("window");

Geocoder.init("AIzaSyDMuCHMDzvvU0JnHmLds-7Id-ZSKk5Xpvg");

type MapBackgroundProps = {
    location_address: string,
};


const  MapBackground = (props: MapBackgroundProps) => {
    // Geocoder.from(props.location_address).then(json => {
    //     var address = json.results[0].geometry.location;
    // }).catch(error => {
    //     console.warn(error);
    // });

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                mapType="standard"
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0942,
                    longitudeDelta: 0.0721,
                }}
                />
        </View>
    );

};

const GeocodeLocation = (location: string) => {
    Geocoder.from(location).then(json => {
        var location = json.results[0].geometry.location;
        return location;
    }).catch(error => {
        console.warn(error);
    });
}

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        position: "absolute",
    }, 
    map: {
        ...StyleSheet.absoluteFillObject,
    }
});

export default MapBackground;
