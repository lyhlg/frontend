import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css, IStyledComponent } from 'styled-components';

import { IText, IProps } from './types';

export const identity = <T extends {}>(arg: T): T => {
  // const a: string = 3;
  return arg;
};

export const a = (num: number): number => num;

const Header: React.FC<IProps> = () => (
  <S.Container>
    <S.ListWrapper>
      {identity('hihi')}
      <li>
        <NavLink className="home" to="/">
          <S.Text isLarge>Home</S.Text>
        </NavLink>
      </li>
      <li>
        <NavLink to="/test">Test</NavLink>
      </li>
    </S.ListWrapper>
  </S.Container>
);

const S: IStyledComponent = {};
S.Container = styled.div``;
S.ListWrapper = styled.ul``;
S.Text = styled.p`
  ${(props: IText) =>
    props.isLarge &&
    css`
      font-size: 20px;
    `}
  color: red;
`;

export default Header;
