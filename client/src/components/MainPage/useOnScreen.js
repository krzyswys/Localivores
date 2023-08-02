import { useEffect, useRef, useState } from 'react';

const useOnScreen = (threshold = 0.0) => {
    const [isOnScreen, setIsOnScreen] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsOnScreen(true);
                    } else {
                        setIsOnScreen(false);
                    }
                });
            },
            { threshold }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    return [elementRef, isOnScreen];
};

export default useOnScreen;
