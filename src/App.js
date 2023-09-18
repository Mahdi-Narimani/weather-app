import { useState } from "react";
import Header from "./Layout/Header/Header";
import Main from "./Layout/Main";
import StartPage from "./components/StartPage";


const App = () =>
{

  const [selectedId, setSelectedId] = useState('');
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [focusInput, setFocusInput] = useState(false);

  const selectedIdHandler = id =>
  {
    setSelectedId(id);
  }


  return (
    <div className="w-full">
      <Header
        focusInput={focusInput}
        onFocusInput={setFocusInput}
        onError={setError}
        onSelectedID={selectedIdHandler}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      {!focusInput && !selectedId && <StartPage onFocusInput={setFocusInput} />}
      {error && <p className="error-message">⛔{error}</p>}
      {!error && selectedId && <Main cityID={selectedId} />}
    </div>
  );
}

export default App;
