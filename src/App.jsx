import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homepage'
import { ShopPage } from './pages/shoppage'
import { ProductPage } from './pages/productpage'
import { ContactPage } from './pages/contactpage'
import { TeamPage } from './pages/teampage'
import { AboutUsPage } from './pages/aboutus'
import SignUpForm from './components/signUpForm'
import { Provider } from 'react-redux'
import store from './store'
import LoginForm from './components/loginform'
import { SomeComponent } from './pages/deneme'
import { ToastContainer } from 'react-toastify'




function App() {

  return (
    <>
    <ToastContainer/>
     <Provider store={store}>
    <Router>
      <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
        <Route path="/shop">
           <ShopPage/>
        </Route>
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
    </Provider>
    </>
  )
}

export default App
