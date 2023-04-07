import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, } from "react-native";

import IconMore from "../../assets/images/svg/icon-more.svg"
import IconDirections from "../../assets/images/svg/s-icon-directions.svg"
import IconParking from "../../assets/images/svg/icon-parking.svg"
import { Colors } from "../utilities/colors";
import { Circle, Svg } from "react-native-svg";

type LocationTileProps = {
    location_name: string;
    location_address: string;
    location_spot: string;
}

const LocationTile = (props: LocationTileProps) => {
    return(
        <View style={styles.tile}>
            <View style={styles.parking}>
                <IconParking/>
            </View>
            <View style={[styles.address_row]} >
                <View style={styles.address_container}>
                    <Text style={styles.location_name}>{props.location_name}</Text>
                    <Text>{props.location_address}</Text>
                </View>
                <View style={styles.more_button}>
                    <TouchableOpacity>
                        <IconMore />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.row]} >
                <Text style={styles.location_spot}>{props.location_spot}</Text>
                <View style={styles.icon_directions}>
                    <IconDirections />
                </View>
                <View style={styles.directions_button}>
                    <TouchableOpacity>
                        <Text style={styles.directions}>Get directions</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View style={styles.divider}> */}
                {/* <Svg height={16} width={16}>
                    <Circle cx={8} cy={8} r={8} fill={Colors.yellow} />
                </Svg> */}
                <View style={{overflow: "hidden"}}>
                    <View style={styles.border} />
                </View>
                {/* <Svg height={16} width={16}>
                    <Circle cx={8} cy={8} r={8} fill={Colors.yellow} />
                </Svg> */}
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    tile: {
        height: 141,
    },
    divider: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    border: {
        borderColor: Colors.dividerGray,
        borderWidth: 1,
        borderStyle: "dashed",
        margin: -1,
        marginTop: 26,
    },
    address_row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 44,
    },
    row: {
        flexDirection: "row",
        paddingTop: 15,
        paddingLeft: 26,
    },
    address_container: {
        paddingLeft: 24,
    },
    location_name: {
        fontFamily: "Rubik-Regular",
        fontWeight: "500",
        fontSize: 18,
        lineHeight: 23,
    },
    location_address: {
        fontFamily: "Rubik-Regular",
        fontWeight: "400",
        fontSize: 13,
        lineHeight:16,
        color: Colors.black60,
    },
    location_spot: {
        fontFamily: "Rubik-Regular",
        fontWeight: "700",
        fontSize: 11,
        lineHeight: 13,
        letterSpacing: 0.25,
        textTransform: "uppercase",
    },
    directions: {
        fontFamily: "Rubik-Regular",
        fontWeight: "700",
        fontSize: 11,
        lineHeight: 13,
        letterSpacing: 1,
        textTransform: "uppercase",
        color: Colors.teal,
    },
    icon_directions: {
        paddingLeft: 22,
    },
    directions_button: {
        paddingLeft: 8.33,
    },
    more_button: {
        right: 24,
    },
    parking: {
        position: "absolute",
        left: 16,
        top: -14,
    },
    icon_parking: {},
});

export default LocationTile;