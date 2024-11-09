import { ProductList } from "@/models/Product";
import { ProductService } from "@/services/ProductService";
import { onMounted, ref } from "vue";

function useProducts() {
    const loading = ref(false);
    const products = ref<ProductList>([])
    const error = ref(false);

    const getProducts = async () => {
        loading.value = true;
        try {
            products.value = await ProductService.getAll();
        } catch (e) {
            error.value = true;
            console.error(e);
        }
        loading.value = false;
    }

    onMounted(() => {
        getProducts();
    })

    return {
        products, loading, error,
    }
}

export {
    useProducts,
}