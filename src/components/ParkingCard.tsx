import React from "react";
import { StyleSheet, View } from "react-native";

import ListTile, { ListIcons } from "./ListTile";

import { Colors } from "../utilities/colors";
import DateTile, { DateTileType } from "./DateTile";
import OwnerTile from "./OwnerTile";
import LocationTile from "./LocationTile";
import { Circle, Svg } from "react-native-svg";

type ParkingCardProps = {
    location_name: string,
    location_address: string,
    location_spot: string,
    start_date: Date,
    end_date: Date,
    price: number,
    first_name: string,
    last_name: string,
    role: string,
}


const ParkingCard = (props: ParkingCardProps) => {
    var priceReceipt = "View receipt for $" + props.price

    return(
        <View style={styles.card}>
            <LocationTile 
                location_name={props.location_name}
                location_address={props.location_address}
                location_spot={props.location_spot}
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
                <DateTile type={DateTileType.start} date={props.start_date} />
                <DateTile type={DateTileType.end} date={props.end_date} />
            </View>
            <ListTile label="View parking instructions" icon={ListIcons.help} />
            <ListTile label="Purchase additional months" icon={ListIcons.clock} />
            <ListTile label={priceReceipt} icon={ListIcons.receipt} />
            <OwnerTile first_name={props.first_name} last_name={props.last_name} role={props.role} />
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