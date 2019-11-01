import React from 'react';

interface HomeProps {
  name: string;
}

interface HomeState {}

class Home extends React.PureComponent<HomeProps, HomeState> {
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

export default Home;
