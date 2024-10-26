import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from "./components/layout/header/index"
import Footer from "./components/layout/footer/index"

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
      <div>
        <Footer/>
      </div>



    </div>
  )
}

export default App