import { component$, useStore } from '@builder.io/qwik';
import { QwikLottie } from './components/lottie';
import * as animationData from './json/basicLoader.json';

export default component$(() => {
  const defaultOptions = useStore({
    path: 'https://assets7.lottiefiles.com/packages/lf20_M6jA5UNDHa.json',
    animationData,
  });
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Qwik Lottie Demo</title>
      </head>
      <body>
        <div id="container"></div>
        <QwikLottie path={defaultOptions.path} />
      </body>
    </>
  );
});
