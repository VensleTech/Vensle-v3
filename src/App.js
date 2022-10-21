import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './main/home';
import './App.css';
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

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:id" element={<SearchPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/tutorial" element={<BSTutorial />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/vendor/:id" element={<VendProf />} />
          <Route path="/subcat" element={<Subcat />} />
          <Route path="/admin" element={<HAdmin />} />
          <Route path="/admin/products" element={<MyProducts />} />
          <Route path="/admin/orders" element={<MyOrders />} />
          <Route path="/admin/upload" element={<Upload />} />
          <Route path="/admin/messages" element={<Messages />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products/bought" element={<Bought />} />
          <Route path="/admin/products/sold" element={<Sold />} />
          <Route path="/admin/requests" element={<Messages />} />
          <Route path="/admin/request" element={<Request />} />
          <Route path="/admin/drafts" element={<Drafts />} />
          <Route path="/admin/support" element={<Contact />} />
          <Route path="/admin/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
