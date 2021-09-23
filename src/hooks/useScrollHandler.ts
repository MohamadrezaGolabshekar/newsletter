import { useState, useEffect } from "react";

function useScrollHandler(id: string, allowLoad: boolean) {
    const [wrappedElement, setWrappedElement]: any = useState(null);
    const [isLoadMore, setIsLoadMore] = useState(false);

    useEffect(() => {
        setWrappedElement(document.getElementById(id));
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [id])

    // useEffect(() => {
    //     if (!allowLoad) {
    //         setIsLoadMore(false);
    //     }
    // }, [allowLoad])

    const isBottom = (el: any) =>
        el.getBoundingClientRect().bottom > 0 &&
        el.getBoundingClientRect().bottom <= window.innerHeight;

    const handleScroll = () => {
        const shouldLoad = isBottom(wrappedElement);
        if (shouldLoad && allowLoad) {
            setIsLoadMore(true);
        } else {
            setIsLoadMore(false);
        }
    }

    useEffect(() => {
        if (wrappedElement) {
            window.addEventListener('scroll', handleScroll, true);

            // if (wrappedElement?.clientHeight < 650 && allowLoad) {
            //     setIsLoadMore(true);
            // } else 
        }
    }, [wrappedElement, allowLoad]);

    return isLoadMore;

}

export default useScrollHandler;
