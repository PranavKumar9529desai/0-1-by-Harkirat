import { Route, Routes, BrowserRouter, useNavigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Importing components using lazy loading
const Landing = lazy(() => import('./components/Landing'));
const Dashboard = lazy(() => import('./components/dashboard')); // Corrected the import statement

function App() {
  return (
    <div>
      <div style={{ backgroundColor: 'black', color: 'white' }}>This is Topbar</div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback="loading..."><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback="loading..."><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate(); // Corrected the variable name

  return (
    <div>
      <button onClick={() => {
        navigate('/dashboard');
      }}>Dashboard</button>

      <button onClick={() => {
        navigate('/');
      }}>Landing page</button>
    </div>
  );
}