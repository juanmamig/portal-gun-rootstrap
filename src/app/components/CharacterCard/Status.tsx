import classes from './characterCard.module.css';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const Status = ({ status, species }: { status: string; species: string }) => {
  const statusClass =
    status === 'Alive'
      ? classes.alive
      : status === 'Dead'
        ? classes.dead
        : classes.unknown;
  return (
    <div className={classes.characterStatus}>
      <span className={`${classes.statusIcon} ${statusClass}`}></span>
      {`${capitalize(status)} | ${species}`}
    </div>
  );
};

export default Status;
