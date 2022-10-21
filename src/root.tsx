import { component$, useStore } from '@builder.io/qwik';
import { QwikLottie } from './lottie';
import * as animationData from '../assets/cycleAnimation.json';
import { Options } from './types';

export default component$(() => {
  const defaultOptions = useStore<Options>({
    animationData,
    // path: '../assets/cycleAnimation.json'
    // path: 'https://assets7.lottiefiles.com/packages/lf20_M6jA5UNDHa.json',
  });
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Lottie Demo</title>
      </head>
      <body>
        <div id="container"></div>
        <QwikLottie options={defaultOptions} />
      </body>
    </>
  );
});
