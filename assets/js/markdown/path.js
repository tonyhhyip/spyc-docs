//@flow
'use strict';

// From https://github.com/nodejs/node/blob/master/lib/path.js

/* eslint-disable padded-blocks, no-param-reassign */

export {resolve, normalize, normalResolve, dirname};

function normalResolve() {
  return normalize(resolve.apply(null, arguments));
}

function dirname(path: string) {
  const len = path.length;
  if (len === 0)
    return '.';
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  let code = path.charCodeAt(0);

  // Try to match a root
  if (len > 1) {
    if (code === 47/*/*/ || code === 92/*\*/) {
      // Possible UNC root

      rootEnd = offset = 1;

      code = path.charCodeAt(1);
      if (code === 47/*/*/ || code === 92/*\*/) {
        // Matched double path separator at beginning
        let j = 2;
        let last = j;
        // Match 1 or more non-path separators
        for (; j < len; j += 1) {
          code = path.charCodeAt(j);
          if (code === 47/*/*/ || code === 92/*\*/)
            break;
        }
        if (j < len && j !== last) {
          // Matched!
          last = j;
          // Match 1 or more path separators
          for (; j < len; j += 1) {
            code = path.charCodeAt(j);
            if (code !== 47/*/*/ && code !== 92/*\*/)
              break;
          }
          if (j < len && j !== last) {
            // Matched!
            last = j;
            // Match 1 or more non-path separators
            for (; j < len; j += 1) {
              code = path.charCodeAt(j);
              if (code === 47/*/*/ || code === 92/*\*/)
                break;
            }
            if (j === len) {
              // We matched a UNC root only
              return path;
            }
            if (j !== last) {
              // We matched a UNC root with leftovers

              // Offset by 1 to include the separator after the UNC root to
              // treat it as a "normal root" on top of a (UNC) root
              rootEnd = offset = j + 1;
            }
          }
        }
      }
    } else if ((code >= 65/*A*/ && code <= 90/*Z*/) ||
      (code >= 97/*a*/ && code <= 122/*z*/)) {
      // Possible device root

      code = path.charCodeAt(1);
      // :
      if (path.charCodeAt(1) === 58) {
        rootEnd = offset = 2;
        if (len > 2) {
          code = path.charCodeAt(2);
          if (code === 47/*/*/ || code === 92/*\*/)
            rootEnd = offset = 3;
        }
      }
    }
  } else if (code === 47/*/*/ || code === 92/*\*/) {
    return path[0];
  }

  for (let i = len - 1; i >= offset; i -= 1) {
    code = path.charCodeAt(i);
    if (code === 47/*/*/ || code === 92/*\*/) {
      if (!matchedSlash) {
        end = i;
        break;
      }
    } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) {
    if (rootEnd === -1)
      return '.';
    else
      end = rootEnd;
  }
  return path.slice(0, end);
}

function resolve() {
  let resolvedPath = '';
  let resolvedAbsolute = false;
  let cwd;

  for (let i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i -= 1) {
    let path: string;
    if (i >= 0)
      path = arguments[i];
    else {
      if (cwd === undefined)
        cwd = process.cwd();
      path = cwd;
    }

    // Skip empty entries
    if (path.length === 0) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charCodeAt(0) === 47/*/*/;
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return '/' + resolvedPath;
    else
      return '/';
  } else if (resolvedPath.length > 0) {
    return resolvedPath;
  } else {
    return '.';
  }
}

function normalize(path: string): string {

  if (path.length === 0)
    return '.';

  const isAbsolute = path.charCodeAt(0) === 47/*/*/;
  const trailingSeparator = path.charCodeAt(path.length - 1) === 47/*/*/;

  // Normalize the path
  path = normalizeStringPosix(path, !isAbsolute);

  if (path.length === 0 && !isAbsolute)
    path = '.';
  if (path.length > 0 && trailingSeparator)
    path += '/';

  if (isAbsolute)
    return '/' + path;
  return path;
}

function normalizeStringPosix(path: string, allowAboveRoot: boolean) {
  let res = '';
  let lastSlash = -1;
  let dots = 0;
  let code: number;
  for (let i = 0; i <= path.length; i += 1) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47/*/*/)
      break;
    else
      code = 47/*/*/;
    if (code === 47/*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 ||
          res.charCodeAt(res.length - 1) !== 46/*.*/ ||
          res.charCodeAt(res.length - 2) !== 46/*.*/) {
          if (res.length > 2) {
            const start = res.length - 1;
            let j = start;
            for (; j >= 0; j -= 1) {
              if (res.charCodeAt(j) === 47/*/*/)
                break;
            }
            if (j !== start) {
              if (j === -1)
                res = '';
              else
                res = res.slice(0, j);
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46/*.*/ && dots !== -1) {
      dots += 1;
    } else {
      dots = -1;
    }
  }
  return res;
}