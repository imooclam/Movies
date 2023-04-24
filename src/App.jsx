import { Routes, Route } from 'react-router-dom';
import { Home, Movie, Error } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<Movie />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
