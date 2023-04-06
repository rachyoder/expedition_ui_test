import { TouchableHighlight } from "react-native/types";
import IconClose from "../images/svg/icon-close.svg";

export function CloseButton() {
    return (
        <TouchableHighlight onPress={() => {}}>
            <IconClose />
        </TouchableHighlight>
    );
};
