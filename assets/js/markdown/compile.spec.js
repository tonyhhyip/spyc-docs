//@flow
'use strict';

import compile, {ucfirst} from './compile';

/* globals describe, it, expect */

describe('Markdown Compile Test', () => {
  it('export normal', () => {
    expect(typeof compile).toBe('function');
    expect(compile.name).toBe('compile');
    expect(compile.length).toBe(2);

    expect(typeof ucfirst).toBe('function');
    expect(ucfirst.name).toBe('ucfirst');
    expect(ucfirst.length).toBe(1);
  });

  it('ucfirst', () => {
    expect(ucfirst('google')).toBe('Google');
  });
});