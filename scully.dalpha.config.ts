import {
  registerPlugin,
  scullyConfig,
  ScullyConfig,
  RouteTypes,
} from '@scullyio/scully';
import { join } from 'path';

const tadaaPlugin = registerPlugin('router', 'tadaa', async (route, config) => {
  console.log(join(scullyConfig.homeFolder, config.file));
  return [
    {
      route,
      templateFile: join(scullyConfig.homeFolder, config.file),
      postRenderers: ['contentFolder'],
    },
  ];
});

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'dalpha',
  outDir: './dist/static',
  handle404: 'index',
  routes: {
    '/home': {
      type: 'tadaa',
      file: './cms/home/home.md',
    },
    '/about': {
      type: 'tadaa',
      file: './cms/about/about.md',
    },
    '/reference/:title': {
      type: RouteTypes.contentFolder,
      title: {
        folder: './cms/reference',
      },
    },
    '/product/:title': {
      type: RouteTypes.contentFolder,
      title: {
        folder: './cms/product',
      },
    },
  },
};
