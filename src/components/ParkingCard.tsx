import React from "react";
import { StyleSheet, View } from "react-native";

import ListTile, { ListIcons } from "./ListTile";

import { Colors } from "../utilities/colors";
import DateTile, { DateTileType } from "./DateTile";
import OwnerTile from "./OwnerTile";
import LocationTile from "./LocationTile";
import { Circle, Svg } from "react-native-svg";


const ParkingCard = () => {
    return(
        <View style={styles.card}>
            <LocationTile 
                location_name="Fells Wargo's Parking Lot" 
                location_address="15714 Melrose Ave, Beverly Hills, CA 90201"
                location_spot="Spot 21"
            />
            <View style={styles.ticket_stub}>
                <Svg height={16} width={16} style={styles.ticket_left}>
                    <Circle cx={8} cy={8} r={8} fill={Colors.yellow}/>
                </Svg>
                <Svg height={16} width={16} style={styles.ticket_right}>
                    <Circle cx={8} cy={8} r={8} fill={Colors.yellow}/>
                </Svg>
            </View>
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
        marginLeft: 16,
        marginRight: 16,
        shadowRadius: 12,
        shadowColor: Colors.black,
        shadowOpacity: 0.12,
    },
    date_container: {
        flexDirection: "row",
    },
    ticket_stub: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ticket_left: {
        position: "absolute",
        top: -8,
        left: -8,
    },
    ticket_right: {
        justifyContent: "flex-end",
        position: "absolute",
        top: -8,
        right: -8,
    },
});

export default ParkingCard;