import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Search = () => {
    // set up ang input and whenever we type sa input field we grab ang value sulod sa input field 
    const [term, setTerm] = useState('')

    // rerender - means ang pag changing sa state or props like pag changing, type sa input, adding, or removing sa data or prop

    // useEffect
    // if outside sa useEffect hook inig try console log ang component mag rerender 

    // useEffect(() => {}) - render cya only once
    // useEffect(() => {},[])- run cya after every rerender
    // useEffect(() => {},[data])- run cya after every render 

    // every rerender ang component and ang term has change run ang useEffect
    useEffect(() => {
        // 3 ways sa anyc await 

        // async await using variable
        // const search = async () => {
        //     await axios.get('https://api....')
        // }
        // search()

        // immediately invoke
        // (async () => {
        //     await axios.get('https://api....')
        // })()

        // normal promise using .then 
        // axios.get('https://api....')
        //  .then((response) => {
        //    console.log(response.data)
        // })

        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            })
        }
        search()      
    }, [term])    

    return (
        <>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter Search Term</label>
                    <input 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        className='input' 
                    />
                </div>
            </div>
        </>
    )
}

