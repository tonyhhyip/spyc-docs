//@flow
'use strict';

import {Renderer} from 'marked';
import {normalResolve, dirname} from './path';

export default class ReactRender extends Renderer {
  path: string;
  constructor(options: Object, path: string) {
    super(options);
    this.path = path;
  }

  link(href: string, title: string | null, text: string) {
    if (href.match(/\/\//)) {
      return super.link(href, title, text);
    }
    const path = normalResolve(this.path.endsWith('/') ? this.path : dirname(this.path), href);
    const routerLink = `./#${path}`;
    return super.link(routerLink, title, text);
  }
}