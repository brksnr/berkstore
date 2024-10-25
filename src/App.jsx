import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homepage'
import { ShopPage } from './pages/shoppage'
import { ProductPage } from './pages/productpage'
import { ContactPage } from './pages/contactpage'
import { TeamPage } from './pages/teampage'
import { AboutUsPage } from './pages/aboutus'
import SignUpForm from './components/signUpForm'
import { useDispatch } from 'react-redux'
import LoginForm from './components/loginform'
import { SomeComponent } from './pages/deneme'
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { verifyToken } from './auth'

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
     verifyToken(dispatch);
   }, [dispatch]);

  return (
    <>
     
     <ToastContainer/>
    <Router>
      <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
        <Route exact path="/shop" component={ShopPage} />  
        <Route path="/shop/:gender/:title/:categoryId" component={ShopPage}/>
        <Route path="/product">
           <ProductPage/>
        </Route>
        <Route path="/contact">
           <ContactPage/>
        </Route>
        <Route path="/team">
           <TeamPage/>
        </Route>
        <Route path="/aboutus">
           <AboutUsPage/>
        </Route>
        <Route path="/signup">
           <SignUpForm/>
        </Route>
        <Route path="/login">
           <LoginForm/>
        </Route>
        <Route path="/deneme">
           <SomeComponent/>
        </Route>
    </Switch>
    </Router>
   
    </>
  )
}

export default App
