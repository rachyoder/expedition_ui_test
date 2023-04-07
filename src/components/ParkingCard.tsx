import React from "react";
import { Text, StyleSheet, View } from "react-native";

import ListTile from "./ListTile";

import IconHelp from "../../assets/images/svg/s-icon-help.svg";
import { Colors } from "../utilities/colors";
import DateTile from "./DateTile";


const ParkingCard = () => {
    return(
        <View style={styles.card}>
            <View style={styles.date_container} >
                <DateTile type="start" date={new Date(2019, 1, 20, 0)} />
                <DateTile type="end" date={new Date(2019, 6, 20, 0)} />
            </View>
            <ListTile label="View parking instructions" icon="help" />
            <ListTile label="Purchase additional months" icon="clock" />
            <ListTile label="View reciept for $272.95" icon="receipt" />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        // flex: 1,
        backgroundColor: Colors.white,
        marginTop: 24,
        borderRadius: 8,
    },
    date_container: {
        // flex: 1,
        flexDirection: "row",
        // alignItems: "stretch"
    }
});

export default ParkingCard;