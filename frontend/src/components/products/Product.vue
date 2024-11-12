<template>
    <v-card class="product pa-4" variant="elevated">
        <v-card-title class="pa-0 product-name" v-text="item.name"/>
        <v-card-text class="product-description pa-0" v-text="item.description" />
        <div class="d-flex justify-space-between mt-4">
            <div class="product-customer" v-text="customerText" />
            <div class="product-stock" v-text="stockText" />
        </div>
        <v-card-title class="text-right pa-0 product-price" v-text="priceText" />
        <v-btn class="mt-4" :disabled="isPurchaseDisabled" color="success" @click="purchase">
            {{ isPurchaseDisabled ? 'товар распродан' : 'купить' }}
        </v-btn>
    </v-card>
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

const props = defineProps<IProps>()

const stockText = computed(() => `Осталось ${props.item.stock} шт.`)
const customerText = computed(() => `Продавец ${props.item.customer.name}`)
const priceText = computed(() => currency.formatToText(props.item.price))
const isPurchaseDisabled = computed(() => !props.item.stock)

const purchase = async () => {
    await OrderService.create(props.item);
    props.item.stock -= 1;
}

</script>
