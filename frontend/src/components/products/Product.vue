<template>
    <div class="product">
        <div class="product-name" v-text="item.name" />
        <div class="product-description" v-text="item.description" />
        <div class="product-price" v-text="priceText" />
        <div class="product-stock" v-text="stockText" />
        <div class="product-customer" v-text="customerText" />
        <button class="product-purchase" :disabled="isPurchaseDisabled" @click="purchase">в корзину</button>
    </div>
</template>

<script lang="ts" setup>
import { useCurrency } from '@/composables/useCurrency';
import { Product } from '@/models/Product';
import { OrderService } from '@/services/OrderService';
import { computed } from 'vue';

const currency = useCurrency();


interface IProps {
    item: Product,
}

interface IEmits {
    (event: 'purchase'): void
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()

const stockText = computed(() => `Осталось ${props.item.stock} шт.`)
const customerText = computed(() => `Продавец ${props.item.customer.name}`)
const priceText = computed(() => currency.formatToText(props.item.price))
const isPurchaseDisabled = computed(() => !props.item.stock)

const purchase = async () => {
    await OrderService.create(props.item);
    emit('purchase');
}

</script>
