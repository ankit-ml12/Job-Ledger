import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Landing, Error, Register } from './pages'
import {
  Addjob,
  Alljobs,
  SharedLayout,
  Profile,
  State,
} from './pages/dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="stats" element={<State />} />
          <Route path="all-jobs" element={<Alljobs />} />
          <Route path="add-job" element={<Addjob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
