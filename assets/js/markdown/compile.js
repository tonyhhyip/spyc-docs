//@flow
'use strict';

import type {Element} from 'react';

import marked from 'marked';
import ReactRender from './ReactRender';

export default function compile(content: string, path: string): Element<*> {
  const renderer = new ReactRender({}, path);
  const html = marked(content, {
    renderer,
    langPrefix: 'prettyprint lang-'
  });
  return <div dangerouslySetInnerHTML={{__html: html}} />;
}

function ucfirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

export {ucfirst};