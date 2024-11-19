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
import { ToastContainer } from 'react-toastify'
import { useEffect } from 'react'
import { verifyToken } from './auth'
import ProductDetail from './components/productDetail'
import OrderPage from './pages/order'
import CreateOrder from './pages/createorderpage'
import OrderConfirmation from './pages/congratsclient'
import PreviousOrders from './pages/previousorders'
import { BlogPage } from './pages/blogpage'
import { setCategories } from './actions/productActions'
import { fetchCategories } from './api'

function App() {
   const dispatch = useDispatch();

   useEffect(() => {
     verifyToken(dispatch);
   }, [dispatch]);

   useEffect(() => {
      const getCategories = async () => {
          try {
              const categories = await fetchCategories();
              dispatch(setCategories(categories));
          } catch (error) {
              console.error('Error fetching categories:', error);
          }
      };

      getCategories();
  }, [dispatch]);

  return (
    <>
     <ToastContainer />
     <Router>
       <Switch>
         <Route exact path="/shop/:gender/:productId" component={ProductDetail} />
         <Route exact path="/shop/:gender/:title/:categoryId" component={ShopPage} />
        
         <Route path="/shop" component={ShopPage} />
         <Route path="/product" component={ProductPage} />
         <Route path="/contact" component={ContactPage} />
         <Route path="/team" component={TeamPage} />
         <Route path="/aboutus" component={AboutUsPage} />
         <Route path="/signup" component={SignUpForm} />
         <Route path="/login" component={LoginForm} />
         <Route path="/order" component={OrderPage} />
         <Route path="/complete" component={CreateOrder} />
         <Route path="/congrats" component={OrderConfirmation} />
         <Route path="/previousOrders" component={PreviousOrders} />
         <Route path="/blog" component={BlogPage} />
         <Route path="/" component={HomePage} />
       </Switch>
     </Router>
    </>
  )
}

export default App
