import { useEffect, useState } from "react";

let useOnlineStatus = () => {
    let [onlinestatus, setolinestatue] = useState(true)
    useEffect(() => {
        window.addEventListener("online", () => {
            setolinestatue(true)
        })
        window.addEventListener("offline", () => {
            setolinestatue(false)
        })
    }, [])
    return onlinestatus
}
export default useOnlineStatus