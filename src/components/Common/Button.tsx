import { MouseEventHandler, ReactNode } from "react";

import "./button.css"
interface Props {
    children?: ReactNode,
    primary? : false,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    // any props that come into the component
}
const Button = ({ children, onClick, primary = false }: Props) => {
  const buttonClass = primary ? "button primary" : "button";
  return <button className={buttonClass} onClick={onClick}>{children}</button>;
};

export default Button;
