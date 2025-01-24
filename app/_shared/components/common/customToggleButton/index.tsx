import { useState } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";

interface CustomToggleProps {
  options: { id: string; icon: React.ReactNode }[];
  defaultSelected?: string;
  onToggle: (selectedId: string) => void;
}

const CustomToggleButton = ({
  options,
  defaultSelected,
  onToggle,
}: CustomToggleProps) => {
  const [selected, setSelected] = useState(defaultSelected || options[0].id);

  const handleClick = (id: string) => {
    setSelected(id);
    onToggle(id);
  };

  return (
    <div
      className={classNames(
        styles.toggleContainer,
        "flex items-center justify-center gap-2"
      )}
    >
      {options.map((option) => (
        <button
          key={option.id}
          className={`${styles.toggleButton} ${
            selected === option.id ? styles.active : ""
          }`}
          onClick={() => handleClick(option.id)}
        >
          {option.icon}
        </button>
      ))}
    </div>
  );
};

export default CustomToggleButton;
