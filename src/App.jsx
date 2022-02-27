import { ThemeProvider } from 'styled-components';

import HeaderWeb from './components/HeaderWeb';
import GlobalStyle from './Theme/global_styles';
import theme from './Theme/theme';
import DarkThemeProvider from './components/ThemeContext/ThemeContext';
import NoteContainer from './components/NoteContainer/NoteContainer';

function App() {
  return (
    <div>
    <GlobalStyle/> {/* El GlobalStyle siempre deberá estar en el top, arriba de todo. */}
    <DarkThemeProvider>
      <ThemeProvider theme={theme}>
        <HeaderWeb/>        
        <NoteContainer/>      
      </ThemeProvider>
    </DarkThemeProvider>
    </div>
  );
}

export default App;
