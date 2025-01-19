import Link from 'next/link';

import classes from './pageLinks.module.css';

const PageLinks = ({
  pagesNumber = 0,
  characterName,
  currentPage,
}: {
  pagesNumber: number;
  characterName: string | null;
  currentPage: number;
}) => {
  if (pagesNumber <= 0) return null;

  const range = 5;
  const start = Math.max(1, currentPage - Math.floor(range / 2));
  const end = Math.min(pagesNumber, start + range - 1);
  const adjustedStart = Math.max(1, end - range + 1);

  const visiblePages = Array.from(
    { length: end - adjustedStart + 1 },
    (_, i) => adjustedStart + i
  );

  return (
    <ul className={classes.pageLinksList}>
      {visiblePages.map((page) => (
        <li key={page}>
          <Link
            className={`${classes.pageLinksLink} ${currentPage === page ? classes.active : ''}`}
            href={`?name=${characterName || ''}&page=${page}`}
          >
            {page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PageLinks;
