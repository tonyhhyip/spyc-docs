//@flow
'use strict';

import type {Element} from 'react';

function composeHeading({depth, text}: {depth: number, text: string}) {
  const id = text.toLowerCase().replace(/\s+/g, '-');
  if (depth === 1) {
    return <h1 id={id}>{text}</h1>;
  } else if (depth === 2) {
    return <h2 id={id}>{text}</h2>;
  } else if (depth === 3) {
    return <h3 id={id}>{text}</h3>;
  } else if (depth === 4) {
    return <h4 id={id}>{text}</h4>;
  } else if (depth === 5) {
    return <h5 id={id}>{text}</h5>;
  } else if (depth === 6) {
    return <h6 id={id}>{text}</h6>;
  } else {
    return <span>{text}</span>;
  }
}