import AppRoutes from "./routes/AppRoutes.tsx";
import { ActiveLinkProvider } from "./providers/ActiveLinkProvider.tsx";
import { EnrollmentProvider } from "./providers/EnrollmentProvider.tsx";
import ScrollToTop from "./components/ui/ScrollToTop.tsx"

function App() {

  return (
      <EnrollmentProvider>
          <ActiveLinkProvider>
              <ScrollToTop />
              <AppRoutes />
          </ActiveLinkProvider>
      </EnrollmentProvider>
  )
}

export default App
