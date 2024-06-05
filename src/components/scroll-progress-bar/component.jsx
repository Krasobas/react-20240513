import React, {useEffect, useState} from 'react';
export const ScrollProgressBar = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const callback = () => {
            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            const currentProgress = Math.round((window.scrollY / height) * 100);
            setProgress(currentProgress);
        }
        document.addEventListener('scroll', callback)
        return () => {
            document.removeEventListener('scroll', callback)
        }
    }, []);
    console.log(progress)

    return (
        <div>
            <div
                style={{
                    width: `${progress}%`,
                    height:'10px',
                    backgroundColor:'green',
                    position: 'fixed',
                    top: 0,
                    zIndex: 1000
                }}/>
        </div>
    );
}