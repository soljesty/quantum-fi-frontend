import { Fragment } from 'react/jsx-runtime'
import Home from './pages/home'
import GlobalStyle from './styles/globalStyles'
import Header from './components/common/layout/Navbar'
import Footer from './components/common/layout/Footer'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <Home />
      <Footer />
    </Fragment>
  )
}

export default App
