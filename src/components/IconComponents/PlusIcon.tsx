import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const PlusIcon = (props: SvgProps) => (
    <Svg
        width={84}
        height={96}
        fill="none"
        {...props}
    >
        <Path
            fill="#246BFD"
            d="M47 24c13.255 0 24 10.745 24 24S60.255 72 47 72 23 61.255 23 48s10.745-24 24-24Z"
        />
        <Path
            fill="#fff"
            d="M33 48a3.54 3.54 0 0 1 3.54-3.54h20.92a3.54 3.54 0 0 1 0 7.08H36.54A3.54 3.54 0 0 1 33 48Zm10.46-10.46a3.54 3.54 0 0 1 7.08 0v20.92a3.54 3.54 0 0 1-7.08 0V37.54Z"
        />
    </Svg>
)
export default PlusIcon