import { render } from '@testing-library/react';
import TermsOfUse from '../../../pages/termsOfUse/index.js';
import { BrowserRouter } from 'react-router-dom';

describe('Terms of use page', () => {
  test('expect terms of use page to render correctly', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const signup = render(
        <BrowserRouter>
          <TermsOfUse />
        </BrowserRouter>
    );
    expect(TermsOfUse).toMatchSnapshot();
  });
});