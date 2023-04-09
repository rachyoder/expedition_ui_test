import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import CloseButton from '../components/CloseButton';
import ParkingCard from "../components/ParkingCard";
import { Colors } from "../utilities/colors";
import IdentifyButton from "../components/IdentifyButton";
import MapBackground from "../components/MapBackground";

type Purchase = {
    start_date: Date,
    end_date: Date,
    price: number,
    location_name: string,
    location_address: string,
    location_spot: string,
    first_name: string,
    last_name: string,
    role: string,
}

const ConfirmationScreen = () => {
    const [ isLoading, setLoading ] = useState(true);
    const [ data, setData ] = useState<Purchase>();
  
    const getUserPurchase = async () => {
      try {
        const response = await fetch("http://localhost:3000/user-purchase");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(!true)
      }
    };
  
    useEffect(() => {
        getUserPurchase();
    }, []);
  
    return(
        <View style={{ width: "100%", height: "100%" }}>
            <MapBackground location_address={data?.location_address ?? "15714 Melrose Ave, Beverly Hills, CA 90201"}/>
            <View style={styles.background_container}>
                <View>
                    <CloseButton />
                    <ConfirmationText />
                    <LabelText />
                    {isLoading ? (
                        <ActivityIndicator /> 
                    ) : (    
                        <ParkingCard 
                        location_name={data?.location_name ?? ""}
                        location_address={data?.location_address ?? ""}
                        location_spot={data?.location_spot ?? ""}
                        start_date={new Date(data?.start_date ?? "2019-02-20 00:00")}
                        end_date={new Date(data?.end_date ?? "2019-05-20 00:00")}
                        price={data?.price ?? 272.95}
                        first_name={data?.first_name ?? ""}
                        last_name={data?.last_name ?? ""}
                        role={data?.role ?? ""}
                        />
                    )}
                    <IdentifyButton />
                </View>
            </View>
        </View>
    );
};



const ConfirmationText = () => {
    return(
        <View style={styles.header_container}>
            <Text style={styles.header}>
                Nice! Your monthly parking is confirmed.
            </Text>
        </View>
    );
};

const LabelText = () => {
    return(
        <View style={styles.label_container}>
            <Text style={styles.label}>
                Your reservation details are below.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background_container: {
        height: "100%",
        width: "100%",
        backgroundColor: Colors.yellow75,
        // opacity: 0.75,
    },
    header: {
        fontFamily: "Rubik-Regular",
        fontWeight: "900",
        fontSize: 20,
        textTransform: "uppercase",
        lineHeight: 24,
    },
    header_container: {
        marginTop: 34,
        marginLeft: 24,
        width: 311
    },
    label: {
        fontFamily: "Rubik-Regular",
        fontWeight: "400",
        fontSize: 13,
        lineHeight: 18,
        color: Colors.black60,
    },
    label_container: {
        marginTop: 8,
        marginLeft: 24,
    },
});

export default ConfirmationScreen;