import React from "react";
import { FontSize } from '@designsystem/foundation';
interface TextProps {
    size?: keyof typeof FontSize;
    text?: string;
}
declare const Text: React.FunctionComponent<TextProps>;
export default Text;
