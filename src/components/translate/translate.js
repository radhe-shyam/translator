import React, { useEffect, useState } from 'react';
import axios from 'axios';

const doTranslation = async (input, languageCode, cancelToken) => {
    try {
        const { data } = await axios.post(
            'https://translation.googleapis.com/language/translate/v2?key=AIzaSyCf0Xy0OnhxlduyEt3K8zP-sOuu-l_u6uA',
            {
                q: input,
                target: languageCode
            },
            {
                cancelToken: cancelToken.token
            }
        );
        return data.data.translations[0].translatedText;
    } catch (err) {
        return "Translation can't be done because of invalid key";
    }
};

const Translate = ({ language, text }) => {
    const [translated, setTranslated] = useState("");

    useEffect(() => {
        if (!text) {
            return;
        }
        const cancelToken = axios.CancelToken.source();

        doTranslation(text, language, cancelToken).then(setTranslated);

        return () => {
            try {
                cancelToken.cancel();
            } catch (err) { }
        };
    }, [text, language]);

    return (
        <div>
            <label>{ translated ? 'Translation' : '' }</label>
            <p className="title">{translated}</p>
        </div>
    );
}

export default Translate;