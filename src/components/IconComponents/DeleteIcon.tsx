import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
import Colors from "../../constants/Colors";

const DeleteIcon = (props: SvgProps) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        {...props}
    >
        <G fill="#fff" stroke={Colors.LIGHT_GRAY} strokeLinejoin="round" strokeWidth={4}>
            <Path d="M9 10v34h30V10z" />
            <Path strokeLinecap="round" d="M20 20v13m8-13v13M4 10h40" />
            <Path d="m16 10 3.289-6h9.488L32 10z" />
        </G>
    </Svg>
)
export default DeleteIcon