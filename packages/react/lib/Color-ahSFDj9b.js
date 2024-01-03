import React from 'react';
import { Spacing } from '@designsystem/foundation';

const Color = ({ hexcode, height = Spacing.lg, width = Spacing.lg, }) => {
    const className = `dse-width-${width} dse-height-${height} `;
    return React.createElement("div", { className: className, style: { backgroundColor: hexcode } });
};

export { Color as C };
//# sourceMappingURL=Color-ahSFDj9b.js.map
