import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'test-stencil',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
    },
  ],
  testing: {
    browserHeadless: "new",
  },
};
