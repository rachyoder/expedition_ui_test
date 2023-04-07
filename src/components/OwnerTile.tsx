import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";

import ContactIcon from "../../assets/images/svg/icon-messages.svg";
import { Colors } from "../utilities/colors";

type OwnerTileProps = {
    first_name: string;
    last_name: string;
    role: string;

}

const OwnerTile = (props: OwnerTileProps) => {
    return(
        <View style={styles.tile} >
            <View style={styles.profile} >
                <Image source={require("../../assets/images/profile-picture.jpg")} style={styles.profile_picture} />
                <View style={styles.name_container} >
                    <Text style={styles.name} >{props.first_name} {props.last_name.charAt(0)}.</Text>
                    <Text style={styles.role} >{props.role}</Text>
                </View>
            </View>
            <View style={styles.contact_container}>
                <TouchableOpacity>
                    <ContactIcon />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    tile: {
        height: 71,
        flexDirection: "row",
        backgroundColor: Colors.backgroundGray,
        justifyContent: "space-between",
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
    },
    profile: {
        flexDirection: "row",
        paddingTop: 16,
        paddingLeft: 24,
    },
    profile_picture: {
        borderRadius: 150,
        width: 40,
        height: 40,
    },
    name_container: {
        paddingTop: 3,
        paddingLeft: 12,
    },
    name: {
        fontFamily: "Rubik-Medium",
        fontWeight: "400",
        fontSize: 14,
        lineHeight: 17,
    },
    role: {
        fontFamily: "Rubik-Regular",
        fontWeight: "400",
        fontSize: 12,
        lineHeight: 17,
        color: Colors.black40,
    },
    contact_container: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: 24,
        right: 24,
    }
});

export default OwnerTile;