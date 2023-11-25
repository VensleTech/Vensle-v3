import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './main/home';
import Base from './main/index';
import './App.css';
import './Media.css';
import SearchPage from './main/searchpage';
import BSTutorial from './main/bstutorial';
import Details from './main/details';
import VendProf from './main/vendorprof';
import Products from './main/product';
import Subcat from './main/subcat'
import HAdmin from './admin/home'
import MyProducts from './admin/products';
import MyOrders from './admin/orders';
import Upload from './admin/upload';
import Messages from './admin/messages';
import Sold from './admin/sold';
import Bought from './admin/bought';
import Request from './admin/request';
import Drafts from './admin/drafts';
import Customers from './admin/customers';
import Contact from './admin/support';
import Profile from './admin/profile';
import Groceries from './main/groceries';
import Gdetails from './main/grocery';
import Placead from './admin/placead';
import Grocery from './admin/grocery';
import UsedContext from './auth/usercontext';
import Redir from './auth/redir';
import Requests from './main/requests';
import Sign from './reusable/sign';
import Category from './main/category';
import Subone from './main/subone';
import Settings from './admin/settings';
import Subtwo from './main/subtwo';
import Cart from './main/cart';
import Track from './admin/track';
import Confirm from './admin/confirm';
import Roles from './admin/roles';
import Reauth from './reusable/reauth';
import Readmin from './reusable/reqadmin';
import Privacy from './main/privacy';
import Terms from './main/terms';
import Plisting from './main/plisting';
import Faq from './main/faq';
import Bsview from './main/bsview';
import Bssell from './main/bssell';
import Bsdash from './main/bsdash';
import Bsprod from './main/bsprod';
import Bsset from './main/bsset';
import Bsmes from './main/bmess';
import PrEdit from './admin/predit';
import Contactus from './main/contact';



function App() {
  
  return (
    <UsedContext>
      <BrowserRouter>
        <Routes>  
          <Route path="/old" element={<Home />} />
          <Route path="/" element={<Base />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/signin" element={<Sign />} />
          <Route path="/register" element={<Sign />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms-of-use" element={<Terms/>} />
          <Route path="/product-listing" element={<Plisting/>} />\
          <Route path="/tutorial" element={<BSTutorial />} />
          <Route path="/tutorial-view" element={<Bsview />} />
          <Route path="/tutorial-seller" element={<Bssell />} />
          <Route path="/tutorial-dash" element={<Bsdash />} />
          <Route path="/tutorial-products" element={<Bsprod />} />
          <Route path="/tutorial-settings" element={<Bsset />} />
          <Route path="/tutorial-message" element={<Bsmes />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contactus />} />


          <Route path="/search/:cat/:name" element={<SearchPage />} />
          <Route path="/products/:groupid/:name" element={<Products />} />
          <Route path="/pro/:catid/:name" element={<Category />} />
          <Route path="/gro/:catid/:name" element={<Category />} />
          
          <Route path="/pr/:parid/:parname/:catid/:name" element={<Subone />} />
          <Route path="/gr/:parid/:parname/:catid/:name" element={<Subone />} />
          <Route path="/re/:parid/:parname/:catid/:name" element={<Subone />} />

          <Route path="/p/:parid/:parname/:catid/:name" element={<Subtwo />} />
          <Route path="/g/:parid/:parname/:catid/:name" element={<Subtwo />} />
          <Route path="/r/:parid/:parname/:catid/:name" element={<Subtwo />} />

          

          <Route path="/details/pro/:id/:group/:name" element={<Details />} />
          <Route path="/details/gro/:id/:group/:name" element={<Details />} />
          <Route path="/details/req/:id/:group/:name" element={<Details />} />

          <Route path="/grocery/:id/:group/:name" element={<Gdetails />} />
          <Route path="/vendor/:vendorid/:name" element={<VendProf />} />
          <Route path="/subcat" element={<Subcat />} />
          <Route path="/groceries" element={<Groceries />} />

          <Route path="/admin" element={<Reauth><HAdmin /></Reauth>} />
          <Route path="/admin/products" element={<Reauth><MyProducts /></Reauth>} />
          <Route path="/admin/orders" element={<Reauth><MyOrders /></Reauth>} />
          <Route path="/admin/upload" element={<Reauth><Upload /></Reauth>} />
          <Route path="/admin/predit/:id" element={<Reauth><PrEdit /></Reauth>} />
          <Route path="/admin/grocery" element={<Reauth><Grocery /></Reauth>} />
          <Route path="/admin/place" element={<Reauth><Placead /></Reauth>} />
          <Route path="/admin/messages" element={<Reauth><Messages /></Reauth>} />
          <Route path="/admin/customers" element={<Reauth><Customers /></Reauth>} />
          <Route path="/admin/products/bought" element={<Reauth><Bought /></Reauth>} />
          <Route path="/admin/products/sold" element={<Reauth><Sold /></Reauth>} />
          <Route path="/admin/requests" element={<Reauth><Messages /></Reauth>} />
          <Route path="/admin/request" element={<Reauth><Request /></Reauth>} />
          <Route path="/admin/drafts" element={<Reauth><Drafts /></Reauth>} />
          <Route path="/admin/support" element={<Reauth><Contact /></Reauth>} />
          <Route path="/admin/profile" element={<Reauth><Profile /></Reauth>} />
          <Route path="/admin/settings" element={<Reauth><Readmin><Settings /></Readmin></Reauth>} />
          <Route path="/admin/track/:ordid/:proid" element={<Reauth><Track /></Reauth>} />
          <Route path="/admin/confirm" element={<Reauth><Readmin><Confirm /></Readmin></Reauth>} />
          <Route path="/admin/roles" element={<Reauth><Readmin><Roles /></Readmin></Reauth>} />
          <Route path="activate/:id" element={<Reauth><Redir /></Reauth>} />
        </Routes>
      </BrowserRouter>
      </UsedContext>
  );
}

export default App;
