import React from 'react'

export const Accordion = ({ items }) => {
    const renderitem = items.map(item => {
        return (
            <React.Fragment key={item.title}>
                <div className='title active'>
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
        <div className='ui styled accordion'>{renderitem}</div>
    )
}
