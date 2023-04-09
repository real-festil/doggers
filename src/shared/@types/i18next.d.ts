import { resources } from 'src/shared';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['ru'];
  }
}
