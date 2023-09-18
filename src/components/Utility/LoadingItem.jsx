import React from 'react';
import classes from './LoadingItem.module.css';

export const LoadingItem = () =>
{
    return (
        <div className='w-full h-10 border border-indigo-200 rounded-[5px] cursor-pointer '>
            <section className={classes['dots-container']}>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
                <div className={classes.dot}></div>
            </section>

        </div>
    );
};
