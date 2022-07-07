import './App.css';
import Header from './components/Header/Header';
import { useTheme } from './themes/CustomThemeProvider';

function App() {
  const { theme } = useTheme();

  return (
    <div className="App">
      <main style={{ backgroundColor: theme.backgroundColor }}>
        <Header />
      </main>
    </div>
  );
}

export default App;
