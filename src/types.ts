export type renderer = 'svg';

export interface Options {
    container?: any;
    renderer?: renderer;
    loop?: boolean;
    autoplay?: boolean;
    animationData?: object;
    path?: string;
    rendererSettings?: object;
    name?: string;
  }