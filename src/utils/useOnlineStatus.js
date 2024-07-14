import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    //we will just check if online or not
    //using boolean value
    //we will use an online even listener
    //and we need to put them here only once
    //so we will use useeffect

    const [onlineStatus, setonlineStatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setonlineStatus(false);
        })

        window.addEventListener("online", ()=>{
            setonlineStatus(true);
        })
    }, []);

    return onlineStatus;
}

export default useOnlineStatus;