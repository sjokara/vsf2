<template>
  <component
    :is="filter.options.length > 4 ? 'SfScrollable' : 'div' "
    max-content-height="6.875rem"
    :show-text="$t('Show more')"
    :hide-text="$t('Show less')"
  >
    <SfCheckbox
      v-for="option in filter.options"
      :key="`${filter.attribute_code}-${option.value}`"
      :label="option.label + `${option.count ? ` (${option.count})` : ''}`"
      :selected="Boolean(selected(filter.attribute_code, option.value))"
      class="filters__item"
      data-testid="category-filter"
      @change="$emit('selectFilter', option)"
    >
      <template #label="{ label }">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <span
          :class="{ 'display-none': !label }"
          class="sf-checkbox__label"
          v-html="$dompurify(label)"
        />
      </template>
    </SfCheckbox>
  </component>
</template>
<script lang="ts">
import {
  computed, defineComponent, inject, PropType,
} from '@nuxtjs/composition-api';
import { SfCheckbox, SfScrollable } from '@storefront-ui/vue';
import type { Aggregation } from '~/modules/GraphQL/types';

export default defineComponent({
  components: {
    SfCheckbox,
    SfScrollable,
  },
  props: {
    filter: {
      type: Object as PropType<Aggregation>,
      required: true,
    },
  },
  setup() {
    const { isFilterSelected } = inject('UseFiltersProvider');
    const selected = computed(() => ((id: string, optVal: string) => isFilterSelected(id, optVal)));
    return { selected };
  },
});
</script>
