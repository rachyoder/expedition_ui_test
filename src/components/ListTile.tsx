import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import IconHelp from "../../assets/images/svg/s-icon-help.svg";
import IconClock from "../../assets/images/svg/s-icon-clock.svg"
import IconReceipt from "../../assets/images/svg/s-icon-receipt.svg"
import IconArrow from "../../assets/images/svg/s-icon-arrow.svg"
import { Colors } from "../utilities/colors";


type ListTileProps = {
    label: string;
    icon: string;
};

type TileIconLeadingProps = {
  icon: string;
}

type TileLabelProps = {
  label: string;
}

const ListTile = (props: ListTileProps) => {
    return (
      <View style={styles.tile}>
        <TouchableOpacity>
          <View style={styles.row}>
            <TileIconLeading icon={props.icon} />
            <TileLabel label={props.label} />
            <TileIconTrailing />
          </View>  
        </TouchableOpacity>
        {/* <View style={styles.border} /> */}
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
    // width: 343,
    height: 58,
    // backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dividerGray,
    justifyContent: "flex-end",
  },
  row: {
    flexDirection: "row",
  },
  icon_overlay: {
    position: "relative",
    top: "-150%",
    left: "25%",
  },
  label_container: {
  },
  label: {
    textAlign: "center",
    fontFamily: "Rubik-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.59,
  },
  icon_leading: {
  },
  icon_trailing: {
  },
  border: {
    width: 319,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dividerGray,
  }
});


export default ListTile;