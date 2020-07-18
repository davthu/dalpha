import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'dalpha',
  outDir: './dist/static',
  routes: {
    '/product/:title': {
      type: 'contentFolder',
      title: {
        folder: './cms/product',
      },
    },
  },
};
