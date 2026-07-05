import AppRoutes from "./routes/AppRoutes.tsx";
import { ActiveLinkProvider } from "./providers/ActiveLinkProvider.tsx";
import { EnrollmentProvider } from "./providers/EnrollmentProvider.tsx";

function App() {

  return (
      <EnrollmentProvider>
          <ActiveLinkProvider>
              <AppRoutes />
          </ActiveLinkProvider>
      </EnrollmentProvider>
  )
}

export default App
