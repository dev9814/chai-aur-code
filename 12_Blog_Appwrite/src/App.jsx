import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
// import conf from './conf/conf';
import authService from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components/index'

import './App.css'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  // useEffect is used when talking to API, database and external things
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData) {
        dispatch(login({userData}))
      }else {
        dispatch(logout())
      }
    })
    .catch((error) => {
      console.log('Appwrite :: error getting current user ', error);
    })
    .finally(() => setLoading(false))    
  }, [dispatch]) // array dependencies

  // conditional rendering
  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between'>
      <div>
        <Header />
        <main>
          {/* TODO Outlet */}
        </main>
        <Footer />
      </div>
    </div>
  ) : null

}

export default App
