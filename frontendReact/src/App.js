import React, { Fragment, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer'
import LastSync from './components/Header'

import CompGetBlogs from './components/GetBlogs'
import CompCreateBlog from './components/CreateBlog'
import CompEditBlog from './components/UpdateBlog'
import BasicTable from './utils/table'
import DataTablePagination from './utils/tableSelectPagination'
import FilterTableDB from './utils/FilterDbTable'

function App() {

  return (
    <Fragment>
     <LastSync/>
      <BrowserRouter>
        <Routes>
          
          <Route path='/' element={<CompGetBlogs/>} />
          <Route path='/create' element={<CompCreateBlog/>}/>
          <Route path='/edit/:id' element={ <CompEditBlog />} />

          <Route path='/table' element={ <BasicTable />} />
          <Route path='/tablePagination' element={<DataTablePagination/>} />
          <Route path='/tablePaginationDB' element={<FilterTableDB/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </Fragment>
  );
}

export default App;
