'use client';
import { ICustomButtonProps } from '@/utils/interfaces/customButton';
import classes from './customButton.module.css';

const CustomButton = ({ children, ...props }: ICustomButtonProps) => {
    return <button className={classes.btn} {...props}>{children}</button>;
}
export default CustomButton;