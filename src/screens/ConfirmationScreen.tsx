import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";
import ListTile from "../components/ListTile";
import CloseButton from '../components/CloseButton'

const ConfirmationScreen = () => {
    return(
        <View style={{ width: "100%", height: "100%" }}>
            <ImageBackground source={require("../../assets/images/bg-map.png")} resizeMode="cover" style={{ height: "100%", width: "100%" }}>
                <SafeAreaView>
                    <CloseButton />
                </SafeAreaView>
    
            </ImageBackground>
        </View>
    );
};

export default ConfirmationScreen;