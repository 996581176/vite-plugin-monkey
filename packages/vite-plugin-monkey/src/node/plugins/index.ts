import { virtualHtmlPlugin } from './virtualHtml';
import { fixViteAssetPlugin } from './fixViteAsset';
import { fixViteClientPlugin } from './fixViteClient';
import { serverPlugin } from './server';
import { autoGrantPlugin } from './autoGrant';
import { externalGlobalsPlugin } from './externalGlobals';
import { externalLoaderPlugin } from './externalLoader';
import { externalResourcePlugin } from './externalResource';
import { finalBundlePlugin } from './finalBundle';
import { perviewPlugin } from './perview';
import { topLevelAwaitPlugin } from './topLevelAwait';
import { collectCssPlugin } from './collectCss';
import { redirectClient } from './redirectClient';

const monkeyPluginList = [
  // only serve
  virtualHtmlPlugin,
  fixViteAssetPlugin,
  fixViteClientPlugin,
  serverPlugin,

  // only build
  redirectClient,
  autoGrantPlugin,
  externalGlobalsPlugin,
  externalLoaderPlugin,
  externalResourcePlugin,
  topLevelAwaitPlugin,
  collectCssPlugin,

  // only build, final build
  finalBundlePlugin,

  // only preview
  perviewPlugin,
];
export default monkeyPluginList;
