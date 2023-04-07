import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import IconCamera from "../../assets/images/svg/icon-camera.svg"
import { Colors } from "../utilities/colors";

const IdentifyButton = () => {
    return(
        <TouchableOpacity style={styles.identify_button}>
            <View style={styles.identify_container}>
                <IconCamera />
                <Text style={styles.label}>Identify your vehicle</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    identify_button: {
        paddingTop: 24,
    },
    identify_container: {
        flexDirection: "row",
        backgroundColor: Colors.black,
        borderRadius: 24,
        height: 60,
        justifyContent: "space-evenly",
        paddingTop: 18,
        marginHorizontal: 16,
        shadowOffset: {width: 0, height: 2},
        shadowColor: Colors.black,
        shadowOpacity: 0.13,
        shadowRadius: 12,
    },
    label: {
        fontFamily: "Rubik-Regular",
        fontWeight: "900",
        fontSize: 17,
        lineHeight: 20,
        color: Colors.white,
        letterSpacing: 1,
        textTransform: "uppercase",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 1,
    },

});

export default IdentifyButton;