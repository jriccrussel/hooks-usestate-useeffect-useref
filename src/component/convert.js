import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debounceTxt, setDebounceTxt] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceTxt(text);
        }, 500);
    
        return () => {
            clearTimeout(timerId);
        };
    }, [text])    

    useEffect(() => {
        //   console.log('New Langauge or Text')
        const doTranslation = async () => {
            const { data } = await axios.post(
                'https://translation.googleapis.com/language/translate/v2',
                //  ang ka duha na argument sa axios add information sa body 
                {},
                {
                    params: {
                        // q: text,
                        q: debounceTxt,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                    },
                }
            )
            setTranslated(data.data.translations[0].translatedText)
        }

        doTranslation()
    }, [language, debounceTxt])
    
    // alternative clean up function para sa convert 
    // useEffect(() => {
        //   console.log('New Langauge or Text')
    //     const doTranslation = async () => {
    //         const { data } = await axios.post(
    //             'https://translation.googleapis.com/language/translate/v2',
    //             //  ang ka duha na argument sa axios add information sa body 
    //             {},
    //             {
    //                 params: {
    //                     q: text,
    //                     // q: debounceTxt,
    //                     target: language.value,
    //                     key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
    //                 },
    //             }
    //         )
    //         setTranslated(data.data.translations[0].translatedText)
    //     }
        
    //     const timerId = setTimeout(() => {
    //         doTranslation()
    //     }, 500);
    
    //     return () => {
    //         clearTimeout(timerId)
    //     }
    // }, [language, text])

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    )
}



// 