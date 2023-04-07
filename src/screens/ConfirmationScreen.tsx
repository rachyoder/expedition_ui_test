import React from "react";
import { ImageBackground, SafeAreaView, View, Text, StyleSheet } from "react-native";
import CloseButton from '../components/CloseButton';
import ParkingCard from "../components/ParkingCard";
import { Colors } from "../utilities/colors";

const ConfirmationScreen = () => {
    return(
        <View style={{ width: "100%", height: "100%" }}>
            <ImageBackground source={require("../../assets/images/bg-map.png")} resizeMode="cover" style={{ height: "100%", width: "100%" }}>
                <View>
                    <CloseButton />
                    <ConfirmationText />
                    <LabelText />
                    <ParkingCard />
                </View>
            </ImageBackground>
        </View>
    );
};

const ConfirmationText = () => {
    return(
        <View style={styles.header_container}>
            <Text style={styles.header}>
                Nice! Your monthly parking is confirmed.
            </Text>
        </View>
    );
};

const LabelText = () => {
    return(
        <View style={styles.label_container}>
            <Text style={styles.label}>
                Your reservation details are below.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Rubik-Regular",
        fontWeight: "900",
        fontSize: 20,
        textTransform: "uppercase",
        lineHeight: 24,
    },
    header_container: {
        marginTop: 34,
        marginLeft: 24,
        width: 311
    },
    label: {
        fontFamily: "Rubik-Regular",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 18,
        color: Colors.black60,
    },
    label_container: {
        marginTop: 8,
        marginLeft: 24,
    },
});

export default ConfirmationScreen;