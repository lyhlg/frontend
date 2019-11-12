// import React from 'react';
// import renderer from 'react-test-renderer';
// import Header from './Header';
import { identity } from '@/components/header/Header';

describe('Header', () => {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('identity', () => {
    expect(identity<string>('3')).toBe('3');
  });
});
