```tsx
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Unable to start GenZ Edu Tech: the #root element is missing from index.html.'
  );
}

createRoot(rootElement).render(
  <App />
);
```
