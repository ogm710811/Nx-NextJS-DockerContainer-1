import { render } from '@testing-library/react';

import StyleLib from './style-lib';

describe('StyleLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StyleLib />);
    expect(baseElement).toBeTruthy();
  });
});
