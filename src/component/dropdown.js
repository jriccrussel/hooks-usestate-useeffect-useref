import React, { useState, useEffect, useRef } from 'react'


export const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        // click sa gawas select option ma automatic ma close
        // document.body.addEventListener("click", 
        //     (e) => {
                // sa ref inig click dili nato run ang event listner and if ma close sa gawas run dayon ang event listener
        //         if(ref.current.contains(e.target)){
        //             return
        //         }
        //         setOpen(false)
        //     }, { capture: true }
        // )

        // inig click sa toggle para e hide ang select option ang clean func will remove ang event listener we can able to click sa normaally screen with no errors 
        
        // and if toggle balik e show ang select option we can able to close automatically ang select option 
        const onBodyClick = (e) => {
            if(ref.current.contains(e.target)){
                return
            }
            setOpen(false)
        }
        document.body.addEventListener('click', onBodyClick, { capture: true })
        return () => {
            document.body.removeEventListener('click', onBodyClick, {
                capture: true,
            })
        }

    }, [])

    const renderedOptions = options.map((option) => {
        // sa if statement kung unsa ang current na selected item dili cya makita sa additional option 
        // e leave ang current selection na wla kapariha
        if(option.value === selected.value){
            return null
        }

        return (
            <div 
                key={option.value} 
                className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.label}
            </div>
        )
    })

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div 
                    // show/hide ang select option
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
                </div>
            </div>
        </div>
    )
}
