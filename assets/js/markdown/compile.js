//@flow
'use strict';

import type {Element} from 'react';

import marked from 'marked';
import ReactRender from './ReactRender';

export default function compile(content: string, path: string): Element<*> {
  const render = new ReactRender({}, path);
  return <div dangerouslySetInnerHTML={{__html: marked(content, {renderer: render})}} />;
}

function ucfirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

export {ucfirst};