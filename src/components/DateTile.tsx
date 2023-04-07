import React from "react";
import { StyleSheet, Text, View, } from "react-native";

import StartIcon from "../../assets/images/svg/s-icon-start.svg";
import EndIcon from "../../assets/images/svg/s-icon-end.svg";
import { format } from "date-fns";
import { Colors } from "../utilities/colors";

type DateTileProps = {
    date: Date,
    type: string,
}

type SelectIconProps = {
    type: string,
}

type DateTimeProps = {
    date: Date,
}

const DateTile = (props: DateTileProps) => {
    return(
        <View style={[ props.type == "start" ? styles.tile_border : styles.tile_no_border]}>
            <View style={styles.header}>
                <Text style={styles.header_text} >{props.type} date</Text>
                <SelectIcon type={props.type} />
            </View>
            <DateTime date={props.date} />
        </View>
    );
};

const SelectIcon = (props: SelectIconProps) => {
    switch (props.type) {
        case 'start':
            return <StartIcon style={styles.header_icon} />
        case 'end':
            return <EndIcon style={styles.header_icon} />
        default:
            return <StartIcon style={styles.header_icon} />
    }
}

const DateTime = (props: DateTimeProps) => {
    var month_day = format(props.date, "MMM d");
    var year_time = format(props.date, "yyyy (hh:mm a)")
    return (
        <View style={styles.datetime_container} >
            <Text style={styles.date_label} >{month_day}</Text>
            <Text style={styles.time_label} >{year_time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        paddingTop: 12,
        paddingLeft: 24,
        justifyContent: "space-between",
    },
    header_text: {
        fontFamily: "Rubik-Regular",
        fontWeight: "500",
        fontSize: 9,
        lineHeight: 10.67,
        textTransform: "uppercase",
        color: Colors.black50,
    },
    header_icon: {
        right: 24,
    },
    datetime_container: {
        paddingTop: 11,
        paddingLeft: 24,
    },
    date_label: {
        fontFamily: "Rubik-Regular",
        fontWeight: "900",
        fontSize: 19,
        lineHeight: 23,
    },
    time_label: {
        fontFamily: "Rubik-Regular",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 15
    },
    tile_border: {
        height: 89,
        borderRightWidth: 1,
        borderBottomWidth:1,
        borderColor: Colors.dividerGray,
        flexGrow: 1,
    },
    tile_no_border: {
        height: 89,
        borderBottomWidth:1,
        borderColor: Colors.dividerGray,
        flexGrow: 1,
    }
});

export default DateTile;