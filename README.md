<p align="center">
  <br>
  <img width="400" src="./assets/qwik-lottie.png" alt="logo of awesome-vite repository">
  <br>
</p>

<h1 align='center'>Qwik Lottie</h1>

<div align='center'>
Lottie Animation Component for <a href='https://github.com/BuilderIO/qwik'>Qwik</a>.
<br><br>
<a href='http://badge.fury.io/js/qwik-lottie'>
<img src='https://badge.fury.io/js/qwik-lottie.svg' alt='Qwik Lottie'>
</a>
</div>

<details>
<summary>Table of Contents</summary>

- [Wapper of bodymovin.js](#wapper-of-bodymovinjs)
- [Demo](#demo)
- [Why Lottie?](#why-lottie)
  - [Flexible After Effects features](#flexible-after-effects-features)
  - [Manipulate your animation any way you like](#manipulate-your-animation-any-way-you-like)
  - [Small file sizes](#small-file-sizes)
- [Installation](#installation)
- [Usage](#usage)
- [Lottie Files](#lottie-files)
- [Configuration](#configuration)
- [Related Projects](#related-projects)
- [Contributing](#contributing)
- [License](#license)

</details>

## Wapper of bodymovin.js

[bodymovin](https://github.com/bodymovin/bodymovin) is [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) plugin for exporting animations as JSON, also it provide bodymovin.js for vender them as svg/canvas/html.

## Demo

https://qwik.design/lottie

## Why Lottie?

#### Flexible After Effects features

We currently support solids, shape layers, masks, alpha mattes, trim paths, and dash patterns. And we’ll be adding new features on a regular basis.

#### Manipulate your animation any way you like

You can go forward, backward, and most importantly you can program your animation to respond to any interaction.

#### Small file sizes

Bundle vector animations within your app without having to worry about multiple dimensions or large file sizes. Alternatively, you can decouple animation files from your app’s code entirely by loading them from a JSON API.

[Learn more](http://airbnb.design/introducing-lottie/) › http://airbnb.design/lottie/

Looking for lottie files › https://www.lottiefiles.com/

## Installation

Install through npm:

```
npm install --save qwik-lottie
```

## Usage

```js
import { component$ } from '@builder.io/qwik';
import { QwikLottie } from 'qwik-lottie';

export default component$(() => {
  const defaultOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_M6jA5UNDHa.json',
  };
  return (
    <>
      <QwikLottie path={defaultOptions.path} />
    </>
  );
});
```

## Lottie Files

Get free json files from [LottieFiles](https://lottiefiles.com/featured).

## Configuration

You can pass a configuration object through property:

- animationData: an Object with the exported animation data.
- path: the relative path to the animation object. (animationData and path are mutually exclusive)
- loop: true / false / number
- autoplay: true / false it will start playing as soon as it is ready
- name: animation name for future reference
- renderer: 'svg' / 'canvas' / 'html' to set the renderer
- container: the dom element on which to render the animation

More information on [Bodymoving Documentation](https://github.com/bodymovin/bodymovin)

## Related Projects

- [Bodymovin](https://github.com/bodymovin/bodymovin) qwik-lottie is a wrapper of bodymovin
- [Angular Lottie](https://github.com/chenqingspring/ng-lottie) angular implementation
- [React Lottie](https://github.com/chenqingspring/react-lottie) react implementation
- [React Native Lottie](https://github.com/airbnb/lottie-react-native) react native implementation by airbnb
- [IOS Lottie](https://github.com/airbnb/lottie-ios) ios implementation by airbnb
- [Android Lottie](https://github.com/airbnb/lottie-android) android implementation by airbnb

## Contributing

Found an awesome package, article, blog, video etc.? Send me a pull request! Just follow the [guidelines](CONTRIBUTING.md). Thank you!.

## License

MIT
