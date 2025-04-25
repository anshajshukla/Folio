// Type declarations for fonts
declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module '*.woff' {
  const content: string;
  export default content;
}

declare module '*.ttf' {
  const content: string;
  export default content;
}

// Type declarations for utils
declare module 'utils/*' {
  const content: any;
  export default content;
}
