import { render } from '@testing-library/react';
import Accordions from '../../../pages/FAQ/Accordions';
import { BrowserRouter } from 'react-router-dom';

describe('Accordion component', () => {
  test('expect accordion component to render correctly', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const faq = render(
        <BrowserRouter>
          <Accordions />
        </BrowserRouter>
    );
    expect(faq).toMatchSnapshot();
  });
});
