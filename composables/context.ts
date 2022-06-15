import type { AxiosInstance } from 'axios';
import type { Config, MagentoApiMethods } from '@vue-storefront/magento-api';
import type { ApiClientMethods, IntegrationContext } from '~/types/core';

export interface VsfContext {
  $magento: IntegrationContext<AxiosInstance, Config, ApiClientMethods<MagentoApiMethods>>;
  $algolia: IntegrationContext<any>
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $vsf: VsfContext
  }
  interface Context {
    $vsf: VsfContext
  }
}
