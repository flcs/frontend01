


npx create-react-app frontend01 --template=typescript
npm i -D @testing-library/react @testing-library/jest-dom @testing-library/user-event

== exemplo01.ts ========
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
==============================

## Importante ter este arquivo
=== src/setupTests.js ================
import '@testing-library/jest-dom';
======================================

=== exemplo02.ts ==========================
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
===========================================

=== exemplo03.ts ==========================
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders welcome message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});
===========================================


npx jest --init


find
get
