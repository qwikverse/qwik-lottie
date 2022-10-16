import { component$, useClientEffect$, useStore } from '@builder.io/qwik';
import lottie from 'lottie-web';

export type renderer = 'svg';
export type path = '';

export interface OptionsProps {
  container?: any;
  renderer?: renderer;
  loop?: boolean;
  autoplay?: boolean;
  animationData?: object;
  path?: string;
  rendererSettings?: object;
}

export const QwikLottie = component$((props: OptionsProps) => {
  const store = useStore({
    anim: {},
  });

  useClientEffect$(() => {
    const container: any = document.getElementById('lottie');
    store.anim = lottie.loadAnimation({
      container,
      renderer: props.renderer || 'svg',
      loop: props.loop || true,
      autoplay: props.autoplay || true,
      animationData: props.animationData,
      path: props.path,
      rendererSettings: props.rendererSettings,
    });
  });
  return <div id="lottie"></div>;
});
