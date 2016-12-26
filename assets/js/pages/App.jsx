//@flow
'use strict';

import type {Element} from 'react';

type State = {
  loaded: boolean,
  showNotFound: boolean,
  content: string,
  path: string,
  menu: boolean
};

import React from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import NotFound from './NotFound';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import compile from '../markdown/compile';
import {Card, CardText} from 'react-toolbox/lib/card';
import {getPath} from '../history';

class App extends React.Component {
  state: State;

  constructor(...arg: Array<Object>) {
    super(...arg);
    this.state = {
      loaded: false,
      showNotFound: false,
      content: '',
      path: getPath(),
      menu: false
    };
  }

  resetState() {
    this.setState({
      loaded: false,
      showNotFound: false,
      content: '',
      path: getPath()
    });
  }

  openMenu() {
    this.setState({
      menu: true
    });
  }

  closeMenu() {
    this.setState({
      menu: false
    });
  }

  render() {
    return (
      <div>
        <NavBar onMenuClick={this.openMenu.bind(this)} />
        <Sidebar active={this.state.menu} handleClose={this.closeMenu.bind(this)} />
        {!this.state.loaded && this.renderProgressBar()}
        {this.state.showNotFound && this.renderNotFound()}
        {this.state.content && this.renderContent()}
      </div>
    );
  }

  renderNotFound() {
    return <NotFound/>;
  }

  renderProgressBar() {
    return <ProgressBar type="circular" mode="indeterminate" multicolor/>;
  }

  renderContent() {
    return (
      <Card style={{marginTop: '8rem'}}>
        <CardText>
          {compile(this.state.content, this.state.path)}
        </CardText>
      </Card>
    );
  }

  componentDidMount() {
    this.fetchUrl();
    this.bindEvent();
  }

  fetchUrl() {
    let path: string = this.state.path || '/';
    if (path.endsWith('/')) {
      path += 'README.md';
    }
    const self = this;
    fetch(location.pathname + path.replace(/^\//, ''))
      .then((response: Response) => {
        if (response.status !== 200) {
          throw new Error('not_found');
        } else {
          return response.text();
        }
      })
      .then((text: string) => {
        this.setState({
          loaded: true,
          content: text
        });
      })
      .catch((e: Error) => {
        if (e.message) {
          self.setState({
            showNotFound: true,
            loaded: true
          });
        }
        console.log(e);
      });
  }

  bindEvent() {
    const self = this;
    window.addEventListener('hashchange', () => {
      self.resetState();
      self.fetchUrl();
    }, false);
  }
}

module.exports = App;
