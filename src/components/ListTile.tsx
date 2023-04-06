import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Circle, Svg } from "react-native-svg";
import IconHelp from "../../assets/images/svg/s-icon-help.svg";
import IconArrow from "../../assets/images/svg/s-icon-arrow.svg"


type ListTileProps = {
    label: string;
};

type TileLabelProps = {
  label: string;
}

const ListTile = (props: ListTileProps) => {
    return (
      <View style={styles.tile}>
        <TouchableOpacity>
          <View style={styles.row}>
            <TileIconLeading />
            <TileLabel label={props.label} />
            <TileIconTrailing />
          </View>  
        </TouchableOpacity>
      </View>
    );
};

const TileIconLeading = () => {
  return(
    <View style={styles.icon_leading}>
      <Svg height="24" width="24" >
        <Circle cx={12} cy={12} r={12} fill="black" />
      </Svg>
      <View>
        <IconHelp style={styles.icon_overlay} />
      </View>
    </View>
  );
};

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
    width: 319,
    height: 58,
    borderBottomWidth: StyleSheet.hairlineWidth,
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
    position: "absolute",
    left: 60,
    bottom: 20.59,
  },
  label: {
    textAlign: "center",
    fontFamily: "Rubik-Regular",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 16.59,
  },
  icon_leading: {
    position: "absolute",
    left: 24,
    bottom: 5,
  },
  icon_trailing: {
    position: "absolute",
    right: 24,
    bottom: 22.59,
  }
});


export default ListTile;