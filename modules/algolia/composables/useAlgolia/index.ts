import { ref, computed, useContext } from '@nuxtjs/composition-api';

export const useAlgolia = (): any => {
  const context = useContext();

  const result = ref({
    products: [],
    categories: []
  });
  const loading = ref(false);
  const error = ref({
    searchProducts: null,
    searchCategories: null,
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

  return {
    searchProducts,
    searchCategories,
    result: computed(() => result.value),
    loading: computed(() => loading.value),
    error: computed(() => error.value),
  };
};
