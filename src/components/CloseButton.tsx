import { StyleSheet, TouchableOpacity, View } from "react-native";
import IconClose from "../../assets/images/svg/icon-close.svg";

const CloseButton = () => {
    return (
        <View>
            <TouchableOpacity onPress={() => {}} style={styles.button}>
                <IconClose height={20} width={20}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingTop: 58,
        paddingLeft: 26,
    }
});

export default CloseButton;
