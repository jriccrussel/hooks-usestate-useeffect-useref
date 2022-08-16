import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Search = () => {
    // set up ang input and whenever we type sa input field we grab ang value sulod sa input field 
    const [term, setTerm] = useState('programming')

    // grab data from term(fetch from search kato async await) and pasa as an array sa results
    const [results, setResults] = useState([])

    const [debouncedTerm, setDebouncedTerm] = useState(term)

    // console.log(results)

    // rerender - means ang pag changing sa state or props like pag changing, type sa input, adding, or removing sa data or prop

    // useEffect
    // if outside sa useEffect hook inig try console log ang component mag rerender 

    // useEffect(() => {}) - render cya only once
    // useEffect(() => {},[])- run cya after every rerender
    // useEffect(() => {},[data])- run cya after every render if naa changes sa data

    // every rerender ang component and ang term has change run ang useEffect
    // useEffect(() => {
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

        // const search = async () => {
        //     const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        //       params: {
        //         action: 'query',
        //         list: 'search',
        //         origin: '*',
        //         format: 'json',
        //         srsearch: term,
        //       },
        //     });
      
        //     setResults(data.query.search);
        //   }
        // search()      

        // if term naa term g define or naay sulod ang term and then run ang search
        // if(term){
        //     search()
        // }

        // using cleanup function method
        // naa throttling issue sa api kada type sa input mag sge rerender ang api sge pangayo request maka pahinay sa application
        // so mag gamit ta ug setTimeout sa search(), inig type sa input after 500ms and wala na lain changes then diha pa cya mo render and request ra iya kaisa
        // so mag gamit ta ug clean up function - gamit lng ta ug clean up function only mag sge rerender and sge hatag request ang api
        // const timeoutId = setTimeout(() => {
        //     if(term){
        //         search()
        //     }
        // }, 500)

        // return () => {
        //     clearTimeout(timeoutId)
        // }

        // if naa sulod ang term and wla sulod ang result then run ang if statement
        // if (term && !results.length){
        //     if(term){
        //         search()
        //     }
        // if naa sulod ang term and naa sulod ang result then run ang else statement
        //     } else {
        //         const timeoutId = setTimeout(() => {
        //             if(term){
        //                 search()
        //             }
        //         }, 500)
        
        //         return () => {
        //             clearTimeout(timeoutId)
        //         }
        //     }
        // }, [term])    
        
    // error ni cya if(term && !result.length)
    // error sa react na results.length missing dependancy
    // issue sa error sa condition if(term && !results.length) since ang term naa sulod 'programming' call ang search() but since ang 'results' naa 10 sulod sa iyang array so ang 'results' change kai naa man cya sulod so mo rerender napud cya
    // and ang react mag ask mag add ta ug result.legnth sa dependency array [term, results.length] then mo pop ang error
    // and also inig check nato sa network tab naa 2 ka request isa para sa term - 'programming' and isa result - setResults(data.query.search)
    // // so to fix the error add ta debounceTerm state will keep on track ni [term, results.length]
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 500)

        return () => {
            clearTimeout(timeoutId)
        }
    },[term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm,
                },
            })
            setResults(data.query.search)
        }
        if(debouncedTerm){
            search()
        }
    }, [debouncedTerm])  

    // clean up function    
    // sa initial render 
    // call ang tibook useeffect 
    // useEffect(() => {}, [])

    // at the same time e return pud nya ang clean up function
    // return () => {}

    // after naa changes sa data e call or invoke una ang cleanup funtion then e call balik ang useeffect
    
    // uncomment ni naa sa ubos for example sa cleanup function 
    // useEffect(() => {
    //   console.log('initial render')
    
    //   return () => {
    //     console.log('clean up')
    //   }
    // }, [term])
    

    const renderresults = results.map((result) => {
        return (
            <div
                key={result.pageid} 
                className='item'
            >
                <div className='right floated content'>
                    <a 
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        className='ui button'
                    >Go</a>
                </div>
                <div className='content'>
                    <div className='header'>
                        {result.title}
                    </div>
                    {/* {result.snippet} */}
                    {/* xss attack - grabing and render data from untrusted source */}
                    {/* dangerouslySetInnerHTML - only if u trust the source */}
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    })

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
            <div className='ui celled list'>
                {renderresults}
            </div>
        </>
    )
}

