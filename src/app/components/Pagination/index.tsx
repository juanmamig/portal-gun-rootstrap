'use client';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

import classes from './pagination.module.css';
import PageLinks from '../PageLinks';
import Chevron from './Chevron';

import { IInfo } from '@/utils/interfaces/characters';

const Pagination = ({ info }: { info: IInfo }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get('name');
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page')!)
    : 1;

  const { next, prev, count, pages } = info;

  if (pages === 1) return null;

  return (
    <div className={classes.pagination}>
      <div className={classes.paginationCounter}>
        Total results: <span> {count}</span>
      </div>
      <div className={classes.paginationButtons}>
        {prev && (
          <Link
            href={`${pathname}?name=${name || ''}&page=${page - 1}`}
            className={classes.paginationPrevNext}
            aria-label='Go to previous page'
          >
            <Chevron direction='left' size={22} />
          </Link>
        )}
        <PageLinks
          characterName={name}
          pagesNumber={pages}
          currentPage={page}
        />
        {next && (
          <Link
            href={`${pathname}?name=${name || ''}&page=${page + 1}`}
            className={classes.paginationPrevNext}
            aria-label='Go to next page'
          >
            <Chevron direction='right' size={22} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
