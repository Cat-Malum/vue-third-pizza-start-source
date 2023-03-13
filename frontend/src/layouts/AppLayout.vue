<template>
    <component :is="layout">
      <slot />
    </component>
</template>
  
<script lang="ts" setup>
    import { shallowRef, watch } from "vue"
    import { useRoute } from "vue-router"
    import DefaultLayout from "@/layouts/DefaultLayout.vue"
    
    const route = useRoute()
    const layout = shallowRef(null)
    
    watch(
        () => route.meta, async (meta) => {
            try {
                const component = await import(`./${meta.layout}.vue`)
                layout.value = component?.default || DefaultLayout
            } catch (e) {
                layout.value = DefaultLayout
            }
        }
    )
</script>