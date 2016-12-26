//@flow
'use strict';

type Prop = {
  active: boolean,
  handleClose: Function
};

type State = {
  loaded: boolean,
  links: Array<Link>
};

type Link = {
  name: string,
  link: string
};

import React from 'react';
import Drawer from 'react-toolbox/lib/drawer';
import {List, ListItem} from 'react-toolbox/lib/list';
import ProgressBar from 'react-toolbox/lib/progress_bar';

export default class Sidebar extends React.Component {

  props: Prop;

  state: State;

  constructor(props: Prop) {
    super(props);
    this.state = {
      loaded: false,
      links: []
    };
  }

  render() {
    return (
      <Drawer active={this.props.active} onOverlayClick={this.props.handleClose}>
        {!this.state.loaded && this.renderProgressBar()}
        <List ripple selectable>
          {this.state.loaded && this.renderList()}
        </List>
      </Drawer>
    );
  }

  componentDidMount() {
    fetch('./toc.json')
      .then((response: Response) => {
        return response.json();
      })
      .then((links) => {
        this.setState({
          links,
          loaded: true
        });
      });
  }

  renderList() {
    const links = [];
    this.state.links.forEach((link: Link) => {
      links.push(<ListItem caption={link.name} to={link.link} onClick={this.props.handleClose} />);
    });

    return links;
  }

  renderProgressBar() {
    return <ProgressBar type="linear" mode="indeterminate" multicolor />;
  }
}