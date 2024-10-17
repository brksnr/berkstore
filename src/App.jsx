import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homepage'
import { ShopPage } from './pages/shoppage'
import { Footer } from './layout/footer'
import { ProductPage } from './pages/productpage'
import { ContactPage } from './pages/contactpage'

function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route exact path="/home">
          <HomePage/>
        </Route>
        <Route exact path="/shop">
           <ShopPage/>
        </Route>
        <Route exact path="/product">
           <ProductPage/>
        </Route>
        <Route exact path="/contact">
           <ContactPage/>
        </Route>
    </Switch>
    </Router>
    </>
  )
}

export default App
