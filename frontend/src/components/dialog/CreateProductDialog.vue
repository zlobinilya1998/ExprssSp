<template>
    <v-dialog v-model="show" max-width="400">
        <template #activator="{ props: activatorProps }">
            <v-tooltip text="Сначала добавьте заказчика" left :disabled="isCanCreateProduct" location="left center">
                <template v-slot:activator="{ props }">
                    <v-btn v-bind="{ ...props, ...activatorProps }" class="ml-auto" color="success">Новый товар</v-btn>
                </template>
            </v-tooltip>


        </template>
        <v-card class="pa-2" variant="elevated">
            <v-card-title>Cоздать товар</v-card-title>
            <v-form ref="form">
                <v-text-field v-model="dto.name" :rules="[Validation.required]" class="mt-2" hide-details
                    placeholder="Название" />
                <v-text-field v-model="dto.description" :rules="[Validation.required]" class="mt-2" hide-details
                    placeholder="Описание" />
                <v-text-field v-model="dto.price" :rules="[Validation.required]" class="mt-2" suffix="руб." hide-details
                    placeholder="Цена" />
                <v-text-field v-model="dto.stock" :rules="[Validation.required]" class="mt-2" suffix="шт." hide-details
                    placeholder="Количество на складе" hint="единиц" />
                <v-select v-model="dto.customerId" :rules="[Validation.required]" class="mt-2" hide-details
                    placeholder="Заказчик" :items="customers" item-title="name" item-value="id" />
                <v-btn class="mt-4" block color="success" :loading="loading" @click="createProduct">Подтвердить</v-btn>
            </v-form>
        </v-card>
    </v-dialog>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useCustomer } from '@/components/customers/composables/useCustomer';
import { ProductCreateDto } from '@/types/dto/ProductDto';
import { ProductService } from '@/services/ProductService';
import { Validation } from '@/utils/validation';

interface IEmits {
    (event: 'create'): void,
}

const emit = defineEmits<IEmits>();

const { customers } = useCustomer();
const { loading, createProduct, dto, form } = useCreateProduct();
const show = ref(false);

const isCanCreateProduct = computed(() => !!customers.value.length);

function useCreateProduct() {
    const loading = ref(false);
    const form = ref<{ validate: () => ({ valid: boolean }) } | null>(null);
    const dto = ref(new ProductCreateDto());
    const createProduct = async () => {
        if (!form.value) return;
        const { valid } = await form.value.validate();
        if (!valid) return;
        loading.value = true
        try {
            await ProductService.create(dto.value);
            show.value = false;
            dto.value = new ProductCreateDto();
            emit('create')
        } catch (e) {
            console.error(e)
        }
        loading.value = false;
    }

    return {
        loading, dto, createProduct, form,
    }
}
</script>