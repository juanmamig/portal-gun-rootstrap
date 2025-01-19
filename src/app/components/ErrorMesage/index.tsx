import Image from 'next/image';

import classes from './errorMessage.module.css';

import { ERRORS_MESSAGES } from '@/utils/errors/errors';
import { IErrorMessage } from '@/utils/interfaces/errors';

const ErrorMessage = ({ type, name }: IErrorMessage) => {
  const error = ERRORS_MESSAGES[type];

  return (
    <section className={classes.error}>
      <h3>{error.title || 'An error ocurred'}</h3>
      {name && (
        <p className={classes.p}>
          {error.message} <span className={classes.name}> {name} </span>
        </p>
      )}

      {!name && <p className={classes.p}>{error.message}</p>}
      <Image className={classes.catImage} src='/cats.svg' alt='' fill />
    </section>
  );
};

export default ErrorMessage;
