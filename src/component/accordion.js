import React, { useState } from 'react'

export const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)

    // para mo toggle we need to get ang index sa item
    const onTitleClick = (index) => {
        // () => console.log('Title Clicked', index)
        setActiveIndex(index)
    }

    const renderitem = items.map((item, index) => {
        return (
            <React.Fragment key={item.title}>
                <div 
                    className='title active'
                    // onClick={() => console.log('Title Clicked', index)}
                    onClick={() => onTitleClick(index)}
                >
                    <i className='dropdown icon'></i>
                    {item.title}
                </div>
                <div className='content active'>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
        
    return (
        // <div>{items.length}</div>
        <div className='ui styled accordion'>
            {renderitem}
            <h1>{activeIndex}</h1>
        </div>
    )
}
