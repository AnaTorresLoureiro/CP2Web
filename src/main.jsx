import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// importação de páginas
import Home from './routes/Home/index.jsx'
import Error from './routes/Error/index.jsx'
import Produto from './routes/Produto/index.jsx'
import Sobre from './routes/Sobre/index.jsx'
import Login from './routes/Login/Login.jsx'
import CadUsuarios from './routes/Login/CadastroUsuario.jsx'

// criação de rotas e estilo default
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyled from './globalStyle.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Error/>,

    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/produto',
        element:<Produto/>,
      },
      {
        path:'/login',
        element:<Login/>,
      },
      {
        path:'/sobre',
        element:<Sobre/>,
      },
      {
        path:'/cadastro',
        element:<CadUsuarios/>,
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyled />
  </StrictMode>,
)
