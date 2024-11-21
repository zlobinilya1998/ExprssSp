<template>
    <v-card class="customer pa-3" variant="tonal">
        <v-card>
            <v-card-title>{{ item.name }}</v-card-title>
        </v-card>
        <v-card-subtitle>E-mail: {{ item.email }}</v-card-subtitle>
        <v-card-subtitle>Номер телефона: {{ item.phone }}</v-card-subtitle>
        <v-card variant="tonal" v-if="item.products">
            <v-card-title v-text="'Товар'"/>
            <div v-for="product in sortedByStockProducts">
                <div class="d-flex">
                    <v-card-subtitle v-text="product.name"/>
                    <v-tooltip text="Товар распродан" :disabled="!!product.stock">
                        <template #activator="{ props: activatorProps}" >
                            <v-card-subtitle v-bind="activatorProps" class="ml-2">{{ product.stock }} шт.</v-card-subtitle>
                        </template>
                    </v-tooltip>
                    <v-card-subtitle class="ml-auto">Цена: {{ formatToText(product.price) }}</v-card-subtitle>
                </div>
                <v-divider class="my-2" />
            </div>
        </v-card>
        <v-btn class="ml-auto" @click="remove" icon size="x-small">
            <v-icon color="error">mdi-delete-circle-outline</v-icon>
        </v-btn>
    </v-card>

</template>

<script lang="ts" setup>
import { useCurrency } from '@/composables/useCurrency';
import { Customer } from 'models/Customer';
import { CustomerService } from 'services/CustomerService';
import { computed } from 'vue';

interface IProps {
    item: Customer,
}

interface IEmits {
    (event: 'remove'): void,
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()
const { formatToText } = useCurrency();

const sortedByStockProducts = computed(() => props.item.products.sort((a,b) => b.stock - a.stock))

const remove = async () => {
    await CustomerService.remove(props.item);
    emit('remove');
};

</script>
