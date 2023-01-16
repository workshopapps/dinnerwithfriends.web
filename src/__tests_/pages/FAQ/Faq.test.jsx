import { render } from '@testing-library/react';
import Faq from '../../../pages/FAQ/Faq';
import { BrowserRouter } from 'react-router-dom';

describe('Faq page', () => {
  test('expect faq page to render correctly', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const faq = render(
        <BrowserRouter>
          <Faq />
        </BrowserRouter>
    );
    expect(faq).toMatchSnapshot();
  });
});

