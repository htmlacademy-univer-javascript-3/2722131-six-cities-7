import MainPage from './pages/MainPage/MainPage';
import OfferPage from './pages/OfferPage/OfferPage';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage';
import Login from './pages/LoginPage/LoginPage';
import PrivatePath from './auth/PrivatePath';
import { Offer } from './mocks/offers';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

type AppProps = {
  offers: Offer[];
};

function App({ offers }: AppProps): JSX.Element {
  const isAuthorized = true;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage offers={offers} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <PrivatePath isAuthorized={isAuthorized}>
              <FavouritesPage offers={offers} />
            </PrivatePath>
          }
        />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route
          path="*"
          element={
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
