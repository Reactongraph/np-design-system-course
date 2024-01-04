import React, { useState } from "react";

import Text from "../../atoms/Text";

export interface SelectOption {
  label: string;
  value: string;
}

export interface RenderOptionProps {
  isSelected: boolean;
  option: SelectOption;
  getOptionRecommendedProps: (overrideProps?: Object) => Object;
}

export interface SelectProps {
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void;
  options?: SelectOption[];
  label?: string;
  renderOption?: (props: RenderOptionProps) => React.ReactNode;
}

const Select: React.FunctionComponent<SelectProps> = ({
  options = [],
  label = "Please select an option ...",
  onOptionSelected: handler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOptionSelected = (option: SelectOption, optionIndex: number) => {
    if (handler) {
      handler(option, optionIndex);
    }
    setIsOpen(false);
  };

  const onLabelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dse-select">
      <button className="dse-select__label" onClick={() => onLabelClick()}>
        <Text>{label}</Text>

        <svg
          width="1rem"
          height="1rem"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {
        <ul
          id="dse-select-list"
          className={`dse-select__overlay ${
            isOpen ? "dse-select__overlay--open" : ""
          }`}
        >
          {options.map((option, optionIndex) => {
            return (
              <li onClick={() => onOptionSelected(option, optionIndex)}>
                <Text>{option.label}</Text>

                <svg
                  width="1rem"
                  height="1rem"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Select;
