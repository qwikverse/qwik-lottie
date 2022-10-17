import { $, component$, useClientEffect$, useStore } from '@builder.io/qwik';
import lottie from 'lottie-web';
import { Options } from './types';

export interface OptionsProps {
  options: Options;
}

export const QwikLottie = component$(({ options }: OptionsProps) => {
  const store = useStore({
    anim: {},
  });

  const loadAnimation$ = $((options: Options) => {
    const container: any = document.getElementById('lottie');
    lottie.loadAnimation({
      container: container || options.container,
      renderer: options.renderer || 'svg',
      loop: options.loop || true,
      autoplay: options.autoplay || true,
      animationData: options.animationData,
      path: options.path,
      rendererSettings: options.rendererSettings,
      name: options.name,
    });
  });

  useClientEffect$(() => {
    store.anim = loadAnimation$(options);
  });

  return <div id="lottie"></div>;
});