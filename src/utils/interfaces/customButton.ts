import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ICustomButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
