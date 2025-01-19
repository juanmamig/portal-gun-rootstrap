import ContentLoader from 'react-content-loader';

import classes from './skeletonCard.module.css';

const SkeletonCard = () => {
  return (
    <div className={classes.skeletonCard}>
      <ContentLoader
        backgroundColor='#e6e6e6'
        foregroundColor='#c2c2c2'
        width='100%'
      >
        <rect x='0' y='0' rx='8' ry='8' width='100%' height='200' />
      </ContentLoader>
      <ContentLoader
        backgroundColor='#e6e6e6'
        foregroundColor='#c2c2c2'
        height={75}
      >
        <rect x='0' y='10' rx='4' ry='4' width='100%' height='10' />
        <rect x='0' y='30' rx='4' ry='4' width='100%' height='10' />
        <rect x='0' y='50' rx='4' ry='4' width='100%' height='10' />
      </ContentLoader>
    </div>
  );
};

export default SkeletonCard;
