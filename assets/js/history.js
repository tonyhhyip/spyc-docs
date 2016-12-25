//@flow
'use strict';

function getPath() {
  const hash = window.location.hash;
  return hash.replace(/^#/, '');
}

export {getPath};