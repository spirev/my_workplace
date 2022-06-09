import { useEffect } from 'react';
import './App.css';
import { Homepage } from './pages/homePage';
import { CustomTheme } from './theme';

function App() {

  const customThemeFunction = CustomTheme();
  const theme = customThemeFunction.theme;

  useEffect(() => {
    console.log('app themeName -> ' + customThemeFunction.themeName);
  }, [customThemeFunction])

  return (
    <div className="App" style={{ backgroundColor: theme.background }}>
      <Homepage>

      </Homepage>
    </div>
  );
}

export default App;
