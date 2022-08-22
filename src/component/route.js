import React, { useEffect, useState } from 'react'

// follows or track ang path sa route 
// making sure to update ang path after mag rerender ang route component
export const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            // console.log('Location Change')   
            // update ang path
            setCurrentPath(window.location.pathname)
        }

        // mag listen na 'popstate' sa window.dispatchEvent(newEvent) naa sa link.js
        window.addEventListener('popstate', onLocationChange)

        return () => {

            // after rerender sa 'popstate' we immediately mag clean up sa 'popstate'
            window.removeEventListener('popstate', onLocationChange)
        }
    }, [])    

    return currentPath === path ? children : null
}

export default Route
