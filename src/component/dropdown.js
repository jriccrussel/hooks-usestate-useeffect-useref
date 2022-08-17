import React, { useState, useEffect } from 'react'

export const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        // click sa gawas select option ma automatic ma close
        document.body.addEventListener("click", () => {
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
        <div className="ui form">
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
