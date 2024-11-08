import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import Colors from "../../constants/Colors"

const SearchIcon = (props: SvgProps) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path
            fill={Colors.WHITE}
            stroke={Colors.GREY}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08"
        />
    </Svg>
)
export default SearchIcon