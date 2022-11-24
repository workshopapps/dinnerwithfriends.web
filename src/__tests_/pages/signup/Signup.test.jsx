import { render } from '@testing-library/react';
import Signup from '../../../pages/signUp/index.jsx';
import { BrowserRouter } from 'react-router-dom';

describe('Accordion component', () => {
  test('expect accordion component to render correctly', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const signup = render(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>
    );
    expect(signup).toMatchSnapshot();
  });
});