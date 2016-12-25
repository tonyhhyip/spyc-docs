//@flow
'use strict';

import {Parser} from 'marked';
import {} from './compose';

export default class ReactParser extends Parser {
  tok() {
    switch (this.token.type) {
    case 'space':
      return null;
    case 'hr':
      return <hr />;
    }
  }
}