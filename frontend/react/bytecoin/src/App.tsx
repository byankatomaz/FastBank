import AppRoutes from "routes"
import { AuthProvider, UserProvider } from "context"

export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <AppRoutes />
      </UserProvider>
    </AuthProvider>
  )
}

