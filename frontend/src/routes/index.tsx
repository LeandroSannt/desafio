import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Google } from '../pages/Google'
import { Details } from '../pages/Google/details'
export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Google />}></Route>
        <Route path="search?" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
