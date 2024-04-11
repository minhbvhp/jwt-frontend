import { BrowserRouter as Router } from 'react-router-dom';
import Nav from "./components/Navigation/Nav";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState, useContext } from 'react';
import AppRoutes from './routes/AppRoute';
import { Hearts } from 'react-loader-spinner';
import { UserContext } from './context/UserContext';
import "./App.scss";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Router>
        {user && user.isLoading
          ?
          <div className='loading-container'>
            < Hearts
              height="100"
              width="100"
              color='pink'
              ariaLabel='loading' />

            <div>Loading data...</div>
          </div>
          :
          <>
            <div className='add-header'>
              <Nav />
            </div>
            <div className="app-container">
              <AppRoutes />
            </div>
          </>
        }
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
    </>
  );
}

export default App;
