import Link from 'next/link'
import classes from './not-found.module.css';
import Image from 'next/image';
import { ERRORS_MESSAGES } from '@/utils/errors/errors';

export default function NotFound() {

    const error = ERRORS_MESSAGES.notFound;
    return (
        <div className={classes.NotFound}>
            <h2>{error.title}</h2>
            <p>{error.message}</p>
            <Link href="/">Return Home</Link>
            <Image
                className={classes.image}
                src="/cats.svg"
                alt="" fill />
        </div>
    )
}