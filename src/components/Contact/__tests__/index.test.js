import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';

afterEach(cleanup)

describe('Contact component',() => {
    it('renders', () => {
        render(
            <Contact />
        )
    })
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact />);
    
        expect(asFragment()).toMatchSnapshot();
      });    
})

describe('Contact displays', () => {
    it('Contact me is present', () => {
        const { getByTestId } = render(<Contact />);
    
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
      });
})

describe('Submit button is visible', () => {
    it('Submit button is dsiplayed', () => {
        const { getByTestId } = render(<Contact />);
    
        expect(getByTestId('submit-button')).toHaveTextContent('Submit');
      });
})