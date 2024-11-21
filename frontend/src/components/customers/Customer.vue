<template>
    <v-card class="customer pa-3" variant="tonal">
        <div data-testid="id">ID: {{ item.id }}</div>
        <div data-testid="name">{{ item.name }}</div>
        <div data-testid="email">{{ item.email }}</div>
        <div data-testid="phone">{{ item.phone }}</div>
        <v-btn data-testid="remove" class="ml-auto" @click="remove" icon size="x-small">
            <v-icon color="error">mdi-delete-circle-outline</v-icon>
        </v-btn>
    </v-card>
</template>

<script lang="ts" setup>
import { Customer } from 'models/Customer';
import { CustomerService } from 'services/CustomerService';

export interface IProps {
    item: Customer,
}

export interface IEmits {
    (event: 'remove'): void,
}

const props = defineProps<IProps>()
const emit = defineEmits<IEmits>()
const remove = async () => {
    await CustomerService.remove(props.item);
    emit('remove');
};

</script>
