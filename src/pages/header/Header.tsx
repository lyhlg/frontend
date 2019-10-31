import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { IStyle, IText, IHeaderProps } from './types';

const Header: React.FC<IHeaderProps> = () => (
  <S.Container>
    <S.ListWrapper>
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

const S: IStyle = {};
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
