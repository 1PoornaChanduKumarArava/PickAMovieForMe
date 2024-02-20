import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Store from './Store.tsx';
import AppRoute from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <RouterProvider router={AppRoute}/>
  </Provider>
)
