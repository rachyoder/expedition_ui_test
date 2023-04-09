import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { LatLng }  from "react-native-maps";
import Geocoder from "react-native-geocoding";

let {height, width} = Dimensions.get("window");

Geocoder.init("AIzaSyDMuCHMDzvvU0JnHmLds-7Id-ZSKk5Xpvg");

type MapBackgroundProps = {
    location_address: string,
};


const  MapBackground = (props: MapBackgroundProps) => {
    const [isLoading, setLoading ] = useState(true);
    const [latitude, setLatitude ] = useState<number>(37.78825);
    const [longitude, setLongitude ] = useState<number>(-122.4324);

    const getLatLng = async () => {
        try {
            const response = await Geocoder.from(props.location_address);
            const json = response.results[0].geometry.location;
            setLatitude(json.lat);
            setLongitude(json.lng);
        } catch(error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getLatLng();
    }, [])

    Geocoder.from(props.location_address).then(json => {
        var address = json.results[0].geometry.location;
    }).catch(error => {
        console.warn(error);
    });

    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map}
                mapType="standard"
                region={{
                    latitude: latitude,
                    longitude: longitude,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.01,
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
