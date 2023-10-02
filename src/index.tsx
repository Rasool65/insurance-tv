import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { ToastContainer } from 'react-toastify';
import '@src/scss/styles/tailwind.min.css';
import '@src/scss/styles/style.scss'; // all of style

const LazyApp = lazy(() => import('./App'));
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={Store}>
    <Suspense fallback={<div></div>}>
      <LazyApp />
      <ToastContainer newestOnTop />
    </Suspense>
  </Provider>
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then((result) => {
        console.log('service worker Registred');
      })
      .catch((result) => {
        console.log('service worker Erorr:', result);
      });
  });
}
