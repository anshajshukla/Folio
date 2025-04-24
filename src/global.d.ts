import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {
      svg: React.JSX.IntrinsicElements['svg'] & { xmlns?: string };
      img: React.JSX.IntrinsicElements['img'];
    }
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png" {
  const content: any;
  export default content;
}

declare module "*.jpg" {
  const content: any;
  export default content;
}
