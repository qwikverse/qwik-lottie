import { $, component$, useClientEffect$, useStore, useSignal } from '@builder.io/qwik';
import lottie from 'lottie-web';
import { Options } from './types';

export interface OptionsProps {
  options: Options;
}

export const QwikLottie = component$(({ options }: OptionsProps) => {
  const store = useStore({
    anim: {},
  });
  const signal   = useSignal<Element>();
  const loadAnimation$ = $((options: Options) => {
    return lottie.loadAnimation({
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
    const container = signal.value;
    store.anim = loadAnimation$({...options, container});
  });

  return <div ref={signal}></div>;
});
