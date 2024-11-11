<template>
    <div>
        <v-card-title>Заказчики</v-card-title>
        <Loader v-if="loading" />
        <div class="customers" v-else-if="customers.length">
            <div class="d-flex justify-space-between">
                <div>Количество заказчиков {{ customers.length }}</div>
                <RouterLink :to="{ name: 'createCustomer' }">
                    <v-btn color="primary">Создать</v-btn>
                </RouterLink>
            </div>
            <Customer v-for="item in customers" :item="item" @remove="getCustomers" />
        </div>
        <EmptyRecord v-else/>
    </div>
</template>

<script setup lang="ts">
import Customer from '@/components/customers/Customer.vue';
import Loader from 'components/shared/Loader.vue';
import EmptyRecord from '@/components/shared/EmptyRecord.vue';
import { useCustomer } from '@/components/customers/composables/useCustomer';

const { customers, loading, getCustomers } = useCustomer();

</script>

<style scoped>
.customers {
    display: flex;
    flex-direction: column;
    gap: 15px;
    max-width: 500px;
    margin: 0 auto;
}

.customer {
    display: flex;
    gap: 20px;
}
</style>