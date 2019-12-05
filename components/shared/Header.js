import React, { Component } from 'react';
import Link from 'next/link';

export class Header extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <React.Fragment>
        <p>{title}</p>
        {children}
        <p style={{ fontSize: '25px' }}>I am P element styled inline</p>
        <p className="customClassFromMain">
          I am styled P element styled inside component
        </p>
        <p className="customClassFromFile">I am P element styled from file</p>
        <ul>
          <li>
            <Link href="/" as="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" as="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/portfolios">
              <a>Portfolios</a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
          <li>
            <Link href="/cv">
              <a>Cv</a>
            </Link>
          </li>
        </ul>
        <style jsx>{`
          .customClassFromFile {
            color: red;
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Header;
