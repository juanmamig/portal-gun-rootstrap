'use client';
import classes from './customButton.module.css';

import { ICustomButtonProps } from '@/utils/interfaces/customButton';

const CustomButton = ({ children, ...props }: ICustomButtonProps) => {
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
};
export default CustomButton;
