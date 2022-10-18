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
    
    lottie.loadAnimation({
      container: options.container,
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
    const container: any = document.getElementById('lottie');
    store.anim = loadAnimation$({...options, container});
  });

  return <div id="lottie"></div>;
});
