import React from "react";
import { View, Text } from "react-native";

import ListTile from "./ListTile";

import IconHelp from "../../assets/images/svg/s-icon-help.svg";


const ParkingCard = () => {
    return(
        <View>
            <ListTile label="View parking instructions" />
            <ListTile label="Purchase additional months" />
            <ListTile label="View reciept for $272.95" />
        </View>
    );
};

export default ParkingCard;