import React, { useState, useRef, useEffect } from 'react';

const Select = ({ options = [], label = "please select an option......", onOptionSelected: handler, }) => {
    const [isOpen, setIsOpen] = useState(false);
    const labelRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [overlayTop, setOverlayTop] = useState(0);
    const onOptionSelected = (option, optionIndex) => {
        if (handler) {
            handler(option, optionIndex);
            setSelectedIndex(optionIndex);
            setIsOpen(false);
        }
    };
    const onLabelClick = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        setOverlayTop((labelRef.current?.offsetHeight || 0) + 10);
    }, [labelRef.current?.offsetHeight]);
    let selectedOption = null;
    if (selectedIndex !== null) {
        selectedOption = options[selectedIndex];
    }
    return (React.createElement("div", { className: "dse-select" },
        React.createElement("button", { "aria-controls": "dse-select-list", "aria-haspopup": true, "aria-expanded": isOpen ? true : undefined, ref: labelRef, className: "dse-select__label", onClick: () => onLabelClick() },
            selectedOption == null ? label : selectedOption.label,
            React.createElement("svg", { className: `dse-select__caret ${isOpen ? "dse-select__caret--open" : "dse-select__caret--closed"}`, width: "1rem", height: "1rem", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, viewBox: "0 0 24 24", stroke: "currentColor" },
                React.createElement("path", { d: "M19 9l-7 7-7-7" }))),
        isOpen ? (React.createElement("ul", { role: "menu", id: 'dse-select-list', style: { top: overlayTop }, className: "dse-select__overlay" }, options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex;
            return (React.createElement("li", { className: `dse-select__option
                ${isSelected ? "dse-select__option--selected" : ""}`, onClick: () => onOptionSelected(option, optionIndex), key: option.value }, option.label));
        }))) : null));
};

export { Select as S };
//# sourceMappingURL=Select-XVdTmEOz.js.map
