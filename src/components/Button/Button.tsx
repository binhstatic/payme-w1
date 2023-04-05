import { ButtonHTMLAttributes } from 'react';

import './button.scss';

export enum BUTTON_TYPE_CLASSES {
  base = 'btn--base',
  inverted = 'btn--inverted',
}

type ButtonProps = {
  buttonType?: BUTTON_TYPE_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button className={`btn ${buttonType} ${className}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
