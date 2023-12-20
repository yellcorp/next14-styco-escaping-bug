'use client';

import styled, {css} from 'styled-components';

const ReproElement = styled.p`
    &::before {
        ${css`
            content: '\\a9';
        `}
    }
`;

export function ReproComponent(props: {}) {
  return (
    <ReproElement>
      This should be preceded by a copyright symbol and <i>not</i> backslash,
      letter A, digit nine
    </ReproElement>
  );
}
