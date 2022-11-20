import { render } from '@testing-library/react';
import Accordions from '../../../pages/FAQ/Accordions';
import { BrowserRouter } from 'react-router-dom';

describe('Faq page', () => {
  test('expect faq page to render correctly', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const faq = render(
        <BrowserRouter>
          <Accordions />
        </BrowserRouter>
    );
    expect(faq).toMatchSnapshot();
  });
});
