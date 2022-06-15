<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div>
      <pre>
        {{ result }}
      </pre>
    </div>
  </div>
</template>

<script>
import { useAlgolia } from "~/modules/algolia/composables/useAlgolia";
import { useContext, onMounted } from '@nuxtjs/composition-api';

export default {
  setup() {
    const context = useContext();

    const { result, loading, error, searchProducts, searchCategories } = useAlgolia();

    onMounted(async () => {
      console.log(context)

      await searchProducts("short");
      await searchCategories("short");
    })

    return {
      result,
      loading,
      error,
    };
  },
};
</script>
