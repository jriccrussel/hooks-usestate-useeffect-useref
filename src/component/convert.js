import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Convert = ({ language, text }) => {
    const [translated, setTranslated] = useState('')

    useEffect(() => {
    //   console.log('New Langauge or Text')
    const doTranslation = async () => {
        const { data } = await axios.post(
            'https://translation.googleapis.com/language/translate/v2',
            //  ang ka duha na argument sa axios add information sa body 
            {},
            {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                },
            }
        )
        setTranslated(data.data.translations[0].translatedText)
    }

    doTranslation()
    }, [language, text])
    

    return (
        <div>
            <h1 className='ui header'>{translated}</h1>
        </div>
    )
}



// 