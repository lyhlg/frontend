import React from 'react';

import Counter from '~components/Counter';
import TodoInsert from '~/components/Todo/TodoInsert';
import TodoList from '~/components/Todo/TodoList';

interface HomeProps {
  name: string;
}

interface HomeState {}

class Home extends React.PureComponent<HomeProps, HomeState> {
  render() {
    const { name } = this.props;
    return (
      <div>
        {name}
        <Counter />
        <TodoInsert />
        <TodoList />
      </div>
    );
  }
}

export default Home;
