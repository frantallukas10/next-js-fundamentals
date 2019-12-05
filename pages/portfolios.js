import React from 'react';
import axios from 'axios';
import BaseLayout from '../components/layouts/BaseLayout';
import Link from 'next/link';

class Portfolios extends React.Component {
  static async getInitialProps() {
    let posts = [];

    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      posts = response.data;
    } catch (err) {
      console.error(err);
    }

    return { posts: posts.splice(0, 10) };
  }

  renderPost(posts, isDinamicRoute = false) {
    return (
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link
              as={`/portfolio/${post.id}`}
              href={
                isDinamicRoute ? '/portfolio/[id]' : `/portfolio?id=${post.id}`
              }
            >
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { posts } = this.props;
    return (
      <BaseLayout>
        <h1>I am Portfolios Page from Class Component</h1>
        Static route
        {this.renderPost(posts)}
        Dynamic route
        {this.renderPost(posts, true)}
      </BaseLayout>
    );
  }
}

export default Portfolios;
