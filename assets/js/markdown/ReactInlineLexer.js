//@flow
'use strict';

import {InlineLexer} from 'marked';
import {escape} from './helper';

export default class ReactInlineLexer extends InlineLexer {
  output(src: string): Array<*> {
    let source: string = src;
    const out = [];
    let cap, text, href;
    while (src) {
      if (cap = this.rules.escape.exec(src)) {
        source = source.substring(cap[0].length);
        out.push(<span>{cap[1]}</span>);
        continue;
      }

      // autolink
      if (cap = this.rules.autolink.exec(src)) {
        source = source.substring(cap[0].length);
        if (cap[2] === '@') {
          text = cap[1].charAt(6) === ':'
            ? this.mangle(cap[1].substring(7))
            : this.mangle(cap[1]);
          href = this.mangle('mailto:') + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }
        out.push(this.renderer.link(href, null, text));
        continue;
      }

      // url (gfm)
      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        source = source.substring(cap[0].length);
        text = escape(cap[1]);
        href = text;
        out.push(this.renderer.link(href, null, text));
        continue;
      }

      // tag
      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }
        source = source.substring(cap[0].length);
        if (this.options.sanitize && this.options.sanitizer) {
          out.push(<span>{this.options.sanitizer(cap[0])}</span>);
        } else {
          out.push(<span>{cap[0]}</span>);
        }
        continue;
      }

      // link
      if (cap = this.rules.link.exec(src)) {
        source = source.substring(cap[0].length);
        this.inLink = true;
        out.push(this.outputLink(cap, {
          href: cap[2],
          title: cap[3]
        }));
        this.inLink = false;
        continue;
      }
    }
    return out;
  }
}
