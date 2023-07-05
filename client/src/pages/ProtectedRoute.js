import { useGlobalContext } from '../context/appContext'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({ children }) => {
  const { user } = useGlobalContext()
  if (!user) {
    return <Navigate to="/landing" />
  }
  return children
}
export default ProtectedRoute
