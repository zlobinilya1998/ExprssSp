<template>
    <div class="product">
        {{ item }}
    </div>
</template>

<script lang="ts" setup>
import { Product } from '@/models/Product';


interface IProps {
    item: Product,
}

const props = defineProps<IProps>()

</script>

<style>
</style>