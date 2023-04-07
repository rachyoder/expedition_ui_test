import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import IconHelp from "../../assets/images/svg/s-icon-help.svg";
import IconClock from "../../assets/images/svg/s-icon-clock.svg"
import IconReceipt from "../../assets/images/svg/s-icon-receipt.svg"
import IconArrow from "../../assets/images/svg/s-icon-arrow.svg"
import { Colors } from "../utilities/colors";

export const enum ListIcons {
  help = "help",
  clock = "clock",
  receipt = "receipt",
}

type ListTileProps = {
    label: string;
    icon: ListIcons;
};

type TileIconLeadingProps = {
  icon: ListIcons;
}

type TileLabelProps = {
  label: string;
}

const ListTile = (props: ListTileProps) => {
    return (
      <View style={styles.tile}>
        <TouchableOpacity>
          <View style={styles.row}>
            <View style={styles.row_leading}>
              <TileIconLeading icon={props.icon} />
              <TileLabel label={props.label} />
            </View>
            <TileIconTrailing />
          </View>  
        </TouchableOpacity>
       <View style={[props.icon != ListIcons.receipt ? styles.border : styles.no_border]} />
      </View>
    );
};


const TileIconLeading = (props: TileIconLeadingProps) => {
    return(
    <View style={styles.icon_leading}>
      <Svg height="24" width="24" >
        <Circle cx={12} cy={12} r={12} fill="black" />
      </Svg>
      <View>
        <SelectIcon icon={props.icon} />
      </View>
    </View>
  );
};

const SelectIcon = (props: TileIconLeadingProps) => {
  switch (props.icon) {
    case 'help':
      return <IconHelp style={styles.icon_overlay} />
    case 'clock':
      return <IconClock style={styles.icon_overlay} />
    case 'receipt':
      return <IconReceipt style={styles.icon_overlay} />
    default:
      return <IconHelp style={styles.icon_overlay} />
  }
}

const TileLabel = (props: TileLabelProps) => {
  return(
    <View style={styles.label_container}>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  );
};

const TileIconTrailing = () => {
  return(
    <View style={styles.icon_trailing}>
      <IconArrow/>
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    height: 58,
    // backgroundColor: Colors.white,
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.dividerGray,
    justifyContent: "space-between",
    paddingTop: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  row_leading: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  icon_overlay: {
    position: "relative",
    top: "-150%",
    left: "25%",
  },
  label_container: {
    paddingTop: 5.52,
    paddingLeft: 12,
  },
  label: {
    textAlign: "center",
    fontFamily: "Rubik-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.59,
  },
  icon_leading: {
    paddingLeft: 24,
  },
  icon_trailing: {
    paddingTop: 8.41,
    right: 24,
  },
  border: {
    width: "95%",
    borderBottomWidth: 1,
    borderBottomColor: Colors.dividerGray,
    alignSelf: "flex-end",
  },
  no_border: {
    width: "95%",
    // borderBottomWidth: 1,
    // borderBottomColor: Colors.dividerGray,
    alignSelf: "flex-end",
  }
});


export default ListTile;