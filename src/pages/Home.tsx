import React from 'react';

interface HomeProps {
  name: string;
}

interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  // state = { :  }
  render() {
    const { name } = this.props;
    return <div>{name}</div>;
  }
}

export default Home;
