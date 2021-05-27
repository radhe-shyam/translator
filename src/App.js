import './App.css';
import { useState } from 'react';
import Field from './components/field/field';
import Language from './components/language/language';
import Translate from './components/translate/translate';
function App() {
    const [text, setText] = useState("");
    const [language, setLanguage] = useState("");
    return (
        <div className="App">
            <Field label="Enter English" value={text} onChange={setText} />
            <hr />
            <Language language={language} onLanguageChange={setLanguage} />
            <hr />
            <Translate text={text} language={language} />
        </div>
    );
}

export default App;
