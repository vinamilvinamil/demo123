import {useState, useEffect} from 'react'
export const Loading = () => {
    return <h2 className = 'position-fixed w-100 h-100 text-center loading'
    style={{background: '#0008', color: 'white', top: 0, left: 0, zIndex: 9}}>
        <svg width='205' height='250' viewBox='0 0 40 50'>
            <polygon strokeWidth='1' stroke='#fff' fill= 'none' points='20,1 40,40 1,40'> 
                
            </polygon>
            <text fill='#fff' x = '5' y ='47'>Loading</text>
        </svg>
    </h2>
}
let interval = undefined;
const LoadingProgress = ({loading}) => {
    const [running, setRunning] = useState(false);
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        //let interval = null;
        if (running) {
            interval = setInterval(() => {
                setProgress((prev) => {
                    if(loading && prev > 95) return prev;
                    return prev + 1
                });
            }, 40);
        } else {
            if(progress == 100) 
            setTimeout(function(){ setProgress(101) }, 500);
            
            clearInterval(interval);
            //interval = null
        }
        // return () => {
        //     if(interval) clearInterval(interval)
        //     interval = null;
        // }
    }, [running]);

    useEffect(() => {
        if (progress == 100) {
            setRunning(false);
            
        }
        
    }, [progress]);

    useEffect(() => {
        if(loading) {
            setProgress(0); 
            setRunning(true)
        } else if(progress != 0 && progress != 101){
            setRunning(false);
            setProgress(100);
        }
    }, [loading])

    return (
        <div className="position-fixed w-100 loading align-items-start" style={{top: 0, left: 0, zIndex: 9999}}>
            {
                progress == 101 || progress == 0 ?
                null :
                <div className='progress' style={{height: '6px', width: '100%'}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${progress}%`}}  aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                
            }
            
        </div>
    )
}
export default LoadingProgress;