import React from 'react';
import BaseLayout from '../../components/layouts/BaseLayout';
import { withRouter } from 'next/router';

class Portfolio extends React.Component {
  static getInitialProps({ query: { id } }) {
    return { id };
  }

  render() {
    console.log('dynamic', this.props.id);

    return (
      <BaseLayout>
        <h1>I am Portfolio Page as dynamic route from Class Component</h1>
        <h2>{this.props.id}</h2>
      </BaseLayout>
    );
  }
}

export default withRouter(Portfolio);
