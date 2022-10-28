import { ChangeEventHandler } from "react";

interface TextFieldI {
  backgroundClassName?: any;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  value: string | number | any;
}
interface ButtonI {
  handleClick: any;
  text: string;
  backgroundClassName?: any;
}

export type {
  ButtonI,
  TextFieldI,
};
