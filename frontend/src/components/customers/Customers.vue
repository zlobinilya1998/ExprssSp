<template>
    <div>
        <Loader v-if="loading" />
        <div class="customers" v-else-if="customers.length">
            <div>Количество заказчиков {{  customers.length }}</div>
            <Customer v-for="item in customers" :item="item" @remove="getCustomers" />
        </div>
        <div v-else>Записи отсутствуют</div>
    </div>
</template>

<script setup lang="ts">
import Customer from '@/components/customers/Customer.vue';
import Loader from 'components/shared/Loader.vue';
import { useCustomer } from '@/components/customers/composables/useCustomer';

const { customers, loading, getCustomers } = useCustomer();

</script>

<style scoped>
.customers {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.customer {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 25px;
}
</style>