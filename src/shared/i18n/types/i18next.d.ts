import { resources } from 'src/shared/i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    resources: (typeof resources)['ru'];
  }
}
