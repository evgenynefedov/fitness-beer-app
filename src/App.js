import './App.css';

import Container from '@mui/material/Container';
import Search from './components/Search/Search'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Container component="main" maxWidth="xs">
      
      <Search />

    </Container>
  );
}

export default App;
