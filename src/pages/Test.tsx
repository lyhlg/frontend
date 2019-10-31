import React from 'react';

interface TestProps {
  name: string;
}

interface TestState {}

class Test extends React.Component<TestProps, TestState> {
  // state = { :  }
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

export default Test;
