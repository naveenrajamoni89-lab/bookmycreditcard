import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import CompareBar from './components/CompareBar';
import ScrollManager from './components/ui/ScrollManager';
import Loader from './components/ui/Loader';
import { DataProvider } from './context/DataContext';
import { CompareProvider } from './context/CompareContext';
import { AuthProvider } from './context/AuthContext';
import PageVisitTracker from './components/ui/PageVisitTracker';
import Home from './pages/Home';

// Secondary pages are lazy-loaded to keep the initial bundle small.
const BestCreditCards = lazy(() => import('./pages/BestCreditCards'));
const Explore = lazy(() => import('./pages/Explore'));
const InterestRates = lazy(() => import('./pages/InterestRates'));
const CibilScore = lazy(() => import('./pages/CibilScore'));
const Eligibility = lazy(() => import('./pages/Eligibility'));
const ComparePage = lazy(() => import('./pages/ComparePage'));
const CategoryPage = lazy(() => import('./pages/CategoryPage'));
const SignIn = lazy(() => import('./pages/SignIn'));
const MyAccount = lazy(() => import('./pages/MyAccount'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const CardDetailPage = lazy(() => import('./pages/CardDetailPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Router>
      <AuthProvider>
      <DataProvider>
        <CompareProvider>
          <div className="app">
            <ScrollManager />
            <PageVisitTracker />
            <Header />
            <main>
              <Suspense fallback={<Loader label="Loading page..." />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/explore" element={<Explore />} />

                  {/* Overview */}
                  <Route path="/best-credit-cards" element={<BestCreditCards />} />
                  <Route path="/credit-card-interest-rates" element={<InterestRates />} />
                  <Route path="/cibil-score-for-credit-card" element={<CibilScore />} />
                  <Route path="/credit-card-eligibility" element={<Eligibility />} />
                  <Route path="/compare-credit-cards" element={<ComparePage />} />

                  {/* Dedicated Individual Credit Card Detail Routes */}
                  <Route path="/:bankSlug/:cardSlug" element={<CardDetailPage />} />
                  <Route path="/credit-card/:cardSlug" element={<CardDetailPage />} />

                  {/* Account */}
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/my-account" element={<MyAccount />} />
                  <Route path="/admin" element={<AdminDashboard />} />

                  {/* By Category + legal pages + single-slug cards (dispatcher) */}
                  <Route path="/:slug" element={<CategoryPage />} />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <CompareBar />
            <Footer />
          </div>
        </CompareProvider>
      </DataProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;
