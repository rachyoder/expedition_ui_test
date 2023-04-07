import React from "react";
import { StyleSheet, View } from "react-native";

import ListTile, { ListIcons } from "./ListTile";

import { Colors } from "../utilities/colors";
import DateTile, { DateTileType } from "./DateTile";
import OwnerTile from "./OwnerTile";


const ParkingCard = () => {
    return(
        <View style={styles.card}>
            <View style={styles.date_container} >
                <DateTile type={DateTileType.start} date={new Date(2019, 1, 20, 0)} />
                <DateTile type={DateTileType.end} date={new Date(2019, 4, 20, 0)} />
            </View>
            <ListTile label="View parking instructions" icon={ListIcons.help} />
            <ListTile label="Purchase additional months" icon={ListIcons.clock} />
            <ListTile label="View reciept for $272.95" icon={ListIcons.receipt} />
            <OwnerTile first_name="Annie" last_name="Warner" role="Owner" />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.white,
        marginTop: 24,
        borderRadius: 8,
    },
    date_container: {
        flexDirection: "row",
    }
});

export default ParkingCard;