import React from "react";
import Spacing from "@designsystem/foundation";
interface MarginProps {
    space?: keyof typeof Spacing;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
}
declare const Margin: React.FunctionComponent<MarginProps>;
export default Margin;
