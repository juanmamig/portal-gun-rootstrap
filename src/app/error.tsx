'use client';

import { useRouter } from 'next/router';
import classes from './error.module.css'
const Error = ({ error }: { error: Error & { digest?: string } }) => {

    const router = useRouter();
    router.push('/');

    return (
        <div className={classes.errorContainer}>
            <h2>Server errors</h2>
            <p>{error.message}</p>
        </div>
    );
}

export default Error;