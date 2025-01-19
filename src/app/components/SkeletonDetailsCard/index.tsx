import ContentLoader from 'react-content-loader';

import classes from './skeletonDetailsCard.module.css';

const SkeletonDetailsCard = () => {
  return (
    <div className={classes.skeletonDetailsCard}>
      <ContentLoader
        backgroundColor='#e6e6e6'
        foregroundColor='#c2c2c2'
        width='100%'
        height={300}
      >
        <rect x='0' y='0' width='100%' height='300' />
      </ContentLoader>
      <div className={classes.skeletonDetailsCardInfo}>
        <ContentLoader
          backgroundColor='#e6e6e6'
          foregroundColor='#c2c2c2'
          width='100%'
          height={160}
        >
          <rect x='0' y='20' rx='4' ry='4' width='100%' height='20' />
          <rect x='0' y='80' rx='4' ry='4' width='100%' height='10' />
          <rect x='0' y='100' rx='4' ry='4' width='100%' height='10' />
          <rect x='0' y='120' rx='4' ry='4' width='100%' height='10' />
        </ContentLoader>
      </div>
    </div>
  );
};

export default SkeletonDetailsCard;
