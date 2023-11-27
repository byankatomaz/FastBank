import AppRoutes from "routes"
import { AuthProvider } from "context"

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

