import React from 'react'

export const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        // handling command clicks
        // e.metaKey - sa MacOS
        // e.ctrlKey - sa Windows
        if(e.metaKey || e.ctrlKey){
            return 
        }

        e.preventDefault()
        window.history.pushState({}, '', href)

        // will communicate sa route component na ang url ni change 
        const newEvent = new PopStateEvent('popstate')
        window.dispatchEvent(newEvent)
    }

    return (
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}
