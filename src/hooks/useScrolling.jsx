import { useState, useEffect, useRef } from 'react'

export const useScrollingTop = (Height) =>
{
    const [showWithScrolling, setShowWithScrolling] = useState(false);


    useEffect(() =>
    {
        const scrollingTop = () =>
        {
            const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            if (scrollTop > Height) setShowWithScrolling(true);
            else { setShowWithScrolling(false) }
        }

        window.addEventListener('scroll', scrollingTop)
        return () => { scrollingTop() }
    }, [showWithScrolling, Height])

    return showWithScrolling;

}


export const useScrollingWidth = () =>
{
    const scrollRef = useRef(null);
    const [scrollX, setScrollX] = useState(0); // For detecting start scroll position
    const [scrollEnd, setScrollEnd] = useState(false); // For detecting end of scrolling

    const slide = (shift) =>
    {
        scrollRef.current.scrollLeft += shift;
        setScrollX(cur => cur + shift); // Updates the latest scrolled position

        //For checking if the scroll has ended
        if (
            Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
            scrollRef.current.offsetWidth
        )
        {
            setScrollEnd(true);
        } else
        {
            setScrollEnd(false);
        }
    };
    const scrollCheck = () =>
    {
        setScrollX(scrollRef.current.scrollLeft);
        if (
            Math.floor(scrollRef.current.scrollWidth - scrollRef.current.scrollLeft) <=
            scrollRef.current.offsetWidth
        )
        {
            setScrollEnd(true);
        } else
        {
            setScrollEnd(false);
        }
    };
    useEffect(() =>
    {
        //Check width of the scrolling
        if (
            scrollRef.current &&
            scrollRef?.current?.scrollWidth === scrollRef?.current?.offsetWidth
        )
        {
            setScrollEnd(true);
        } else
        {
            setScrollEnd(false);
        }
        return () => { };
    }, [scrollRef?.current?.scrollWidth, scrollRef?.current?.offsetWidth]);


    return { scrollRef, scrollX, scrollEnd, slide, scrollCheck }
}