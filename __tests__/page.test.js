// __tests__/page.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import MainPage from '../app/page';
import { act } from 'react-dom/test-utils';
import useStore from '../store';

jest.mock('../store');

const mockStore = {
  elements: ['Item 1', 'Item 2'],
  loggedIn: false,
  addElement: jest.fn(),
  toggleLogin: jest.fn(),
};

useStore.mockReturnValue(mockStore);

describe('MainPage', () => {
  it('renders login button when not logged in', () => {
    render(<MainPage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders elements when logged in', () => {
    mockStore.loggedIn = true;
    render(<MainPage />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('toggles login state', () => {
    render(<MainPage />);
    const button = screen.getByText('Login');
    fireEvent.click(button);
    expect(mockStore.toggleLogin).toHaveBeenCalled();
  });
});
