import { ref, computed, useContext } from '@nuxtjs/composition-api';

export const useAlgolia = (): any => {
  const context = useContext();

  const result = ref({
    products: [],
    categories: [],
    productsByCategory: [],
    relatedProducts: [],
    searchResults: []
  });
  const loading = ref(false);
  const error = ref({
    searchProducts: null,
    searchCategories: null,
    searchProductsByCategory: null,
    relatedProducts:  null,
    searchResults: null
  });

  const searchProducts = async (query) => {
    try {
      loading.value = true;
      result.value.products = await context.app.$vsf.$algolia.api.searchProducts(query);
      error.value.searchProducts = null;
    } catch (err) {
      error.value.searchProducts = err;
    } finally {
      loading.value = false;
    }
  };

  const searchCategories = async (query) => {
    try {
      loading.value = true;
      result.value.categories = await context.app.$vsf.$algolia.api.searchCategories(query);
      error.value.searchCategories = null;
    } catch (err) {
      error.value.searchCategories = err;
    } finally {
      loading.value = false;
    }
  };

  const getProductsByCategory = async (payload) => {
    try {
      loading.value = true;
      result.value.productsByCategory = await context.app.$vsf.$algolia.api.getProductsByCategory(payload);
      error.value.searchProductsByCategory = null;
    } catch (err) {
      error.value.searchProductsByCategory = err;
    } finally {
      loading.value = false;
    }
  };

  const getRelatedProducts = async (payload) => {
    try {
      loading.value = true;
      result.value.relatedProducts = await context.app.$vsf.$algolia.api.getRelatedProducts(payload);
      error.value.relatedProducts = null;
    } catch (err) {
      error.value.relatedProducts = err;
    } finally {
      loading.value = false;
    }
  };

  const searchMultiple = async (query) => {
    try {
      loading.value = true;
      result.value.products = await context.app.$vsf.$algolia.api.searchMultiple(query);
      error.value.searchProducts = null;
    } catch (err) {
      error.value.searchProducts = err;
    } finally {
      loading.value = false;
    }
  };

  return {
    searchProducts,
    searchCategories,
    getProductsByCategory,
    getRelatedProducts,
    searchMultiple,
    result: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
  };
};
