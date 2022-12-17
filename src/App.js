import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './main/home';
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
import Foot from './reusable/footer';
import Groceries from './main/groceries';
import Gdetails from './main/grocery';
import Placead from './admin/placead';
import Grocery from './admin/grocery';
import UsedContext from './auth/usercontext';
import Redir from './auth/redir';
function App() {
  
  const [read, setread] = useState(false)

  return (
    <UsedContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:cat/:name" element={<SearchPage />} />
          <Route path="/products/:groupid/:name" element={<Products />} />
          <Route path="/tutorial" element={<BSTutorial />} />
          <Route path="/details/:id/:group/:name" element={<Details />} />
          <Route path="/grocery/:id/:group/:name" element={<Gdetails />} />
          <Route path="/vendor/:vendorid/:name" element={<VendProf />} />
          <Route path="/subcat" element={<Subcat />} />
          <Route path="/groceries" element={<Groceries />} />
          <Route path="/admin" element={<HAdmin />} />
          <Route path="/admin/products" element={<MyProducts />} />
          <Route path="/admin/orders" element={<MyOrders />} />
          <Route path="/admin/upload" element={<Upload />} />
          <Route path="/admin/grocery" element={<Grocery />} />
          <Route path="/admin/place" element={<Placead />} />
          <Route path="/admin/messages" element={<Messages />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products/bought" element={<Bought />} />
          <Route path="/admin/products/sold" element={<Sold />} />
          <Route path="/admin/requests" element={<Messages />} />
          <Route path="/admin/request" element={<Request />} />
          <Route path="/admin/drafts" element={<Drafts />} />
          <Route path="/admin/support" element={<Contact />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="activate/:id" element={<Redir />} />
        </Routes>
      </BrowserRouter>
      </UsedContext>
  );
}

export default App;
