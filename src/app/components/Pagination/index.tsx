'use client';
import { IInfo } from "@/utils/interfaces/characters";
import { usePathname, useSearchParams } from 'next/navigation'
import classes from './pagination.module.css';
import PageLinks from "../PageLinks";
import Chevron from "./Chevron";
import Link from "next/link";

const Pagination = ({ info }: { info: IInfo }) => {

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const name = searchParams.get('name');
    const page = searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1;

    const { next, prev, count, pages } = info;

    if (pages === 1) return null;

    return (
        <div className={classes.pagination}>
            <div className={classes.paginationCounter}>
                Total results: <span> {count}</span>
            </div>
            <div className={classes.paginationButtons}>
                {prev &&
                    <Link href={`${pathname}?name=${name || ''}&page=${page - 1}`} className={classes.paginationPrevNext}>
                        <Chevron direction="left" size={22} />
                    </Link>
                }
                <PageLinks characterName={name} pagesNumber={pages} currentPage={page} />
                {next &&
                    <Link href={`${pathname}?name=${name || ''}&page=${page + 1}`} className={classes.paginationPrevNext}>
                        <Chevron direction="right" size={22} />
                    </Link>
                }
            </div>
        </div>
    );
}

export default Pagination;
