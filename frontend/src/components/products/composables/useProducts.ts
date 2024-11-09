import { ProductList } from "@/models/Product";
import { ProductService } from "@/services/ProductService";
import { onMounted, ref } from "vue";

function useProducts() {
    const products = ref<ProductList>([])

    const getProducts = async () => {
        products.value = await ProductService.getAll();
    }

    onMounted(() => {
        getProducts();
    })

    return {
        products,
    }
}

export {
    useProducts,
}