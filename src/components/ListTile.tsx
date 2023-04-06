import React from "react";
import { Text, View } from "react-native";

type ListTileProps = {
    label: string;
};

const ListTile = (props: ListTileProps) => {
    return (
      <View>
        <Text>{props.label}</Text>
      </View>  
    );
};


export default ListTile;