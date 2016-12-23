declare var require: {
  (path: string): any;
  ensure: (modules: Array<string>, callback: Function) => void
}

declare var define: {
  (name: string, dependencies: Array<string>, callback: Function): void
}