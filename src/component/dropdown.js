import React, { useState, useEffect, useRef } from 'react'


export const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        // click sa gawas select option ma automatic ma close
        document.body.addEventListener("click", 
            (e) => {
                // sa ref inig click dili nato run ang event listner and if ma close sa gawas run dayon ang event listener
                if(ref.current.contains(e.target)){
                    return
                }
                setOpen(false)
            }, { capture: true }
        )
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
                <label className="label">Select a Color</label>
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
