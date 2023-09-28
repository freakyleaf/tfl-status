import { Provider } from 'react-redux';
import React from 'react';
import { RouterProvider } from 'react-router-dom';

import router from '@routes/router';
import { store } from '@stores/store';

document.body.addEventListener('mousedown', function() {
  document.body.classList.remove('focus-visible');
});

document.body.addEventListener('keydown', function(event) {
  if (event.key === 'Tab') {
    document.body.classList.add('focus-visible');
  }
});

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
