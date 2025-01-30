import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "./App.css"
import Layout from "./Pages/Layout/Layout"
import Home from "./Pages/Home/Home"
import Calendar from "./Pages/Calendar/Calendar"

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calendar" element={<Calendar />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
