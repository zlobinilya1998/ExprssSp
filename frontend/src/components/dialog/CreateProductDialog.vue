<template>
    <v-dialog v-model="show" max-width="400">
        <template #activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps" class="ml-auto" color="success">Создать товар</v-btn>
        </template>
        <v-card class="pa-2" variant="elevated">
            <v-card-title>Cоздать товар</v-card-title>
            <v-form>
                <v-text-field v-model="dto.name" class="mt-2" hide-details placeholder="Название" />
                <v-text-field v-model="dto.description" class="mt-2" hide-details placeholder="Описание" />
                <v-text-field v-model="dto.price" class="mt-2" hide-details placeholder="Цена" />
                <v-text-field v-model="dto.stock" class="mt-2" hide-details placeholder="Количество на складе"
                    hint="единиц" />
                <v-select v-model="dto.customerId" class="mt-2" hide-details placeholder="Заказчик" :items="customers"
                    item-title="name" item-value="id" />
                <v-btn class="mt-4" block color="success" :loading="loading" @click="createProduct">Подтвердить</v-btn>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useCustomer } from '@/components/customers/composables/useCustomer';
import { ProductCreateDto } from '@/types/dto/ProductDto';
import { ProductService } from '@/services/ProductService';

const { customers } = useCustomer();
const { loading, createProduct, dto } = useCreateProduct();
const show = ref(false);

function useCreateProduct() {
    const loading = ref(false);
    const dto = ref(new ProductCreateDto());
    const createProduct = async () => {
        loading.value = true
        try {
            await ProductService.create(dto.value);
            show.value = false;
            dto.value = new ProductCreateDto();
        } catch (e) {
            console.error(e)
        }
        loading.value = false;
    }
    
    return {
        loading, dto, createProduct,
    }
}
</script>