import React, { useState } from 'react';
import './language.css';

const LANGUAGES = [
    { label: "Afrikaans", value: "af" },
    { label: "Arabic", value: "ar" },
    { label: "French", value: "fr" },
    { label: "Hindi", value: "hi" },
    { label: "Japanese", value: "ja" },
    { label: "Portuguese", value: "pt" },
    { label: "Russian", value: "ru" },
    { label: "Simplified Chinese", value: "zh-CN" },
    { label: "Spanish", value: "es" },
    { label: "Swahili", value: "sw" },
    { label: "Thai", value: "th" }
];
const Language = ({ language, onLanguageChange }) => {

    if (language === undefined || language === '') {
        language = 'es';
    }
    const languagesConfig = LANGUAGES.find(l => l.value === language);
    if (!languagesConfig) {
        throw new Error(`Unknown language code ${language}`);
    }

    const [open, setOpen] = useState(false);

    const onSelect = language => {
        setOpen(false);
        onLanguageChange(language);
    };
    return (
        <div>
            <label>Select Language</label>
            <div className={`dropdown ${open && "is-active"}`}>
                <div className="dropdown-trigger">
                    <button
                        className="button"
                        onClick={() => setOpen(!open)}
                    >
                        <span>{languagesConfig.label}</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" />
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu">
                    <div className="dropdown-content">
                        {
                            LANGUAGES.map(({label, value}, i) => {
                                return (
                                    <button
                                        key={i}
                                        onClick={() => onSelect(value)}
                                        className="dropdown-item"
                                    >{label}</button>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Language;