import { computed, ref } from "vue";
import { useCurrency } from '@/composables/useCurrency';
import { useDate } from '@/composables/useDate';
import { IOrderProps } from "@/components/orders/Order.vue";
import { OrderStatus } from "@/models/Order";
import { OrderService } from "@/services/OrderService";

function useOrder(props: IOrderProps) {
    const date = useDate();
    const currency = useCurrency();
    const loading = ref(false);

    const creationDate = computed(() => date.formatToText(props.item.createdAt));
    const orderAmount = computed(() => currency.formatToText(props.item.totalAmount));
    const orderStatus = computed(() => {
        const map = new Map<OrderStatus, string>([
            [OrderStatus.Created, 'создан'],
            [OrderStatus.Completed, 'выполнен'],
        ])

        return map.get(props.item.status);
    })
    const isCompleted = computed(() => props.item.status === OrderStatus.Completed);

    const completeOrder = async () => {
        loading.value = true;
        try {
            await OrderService.statusToCompleted(props.item.id)
        } catch (e) {
            throw e;
        }
        loading.value = false;
    };



    return {
        creationDate, orderAmount, orderStatus, isCompleted, completeOrder, loading
    }
}

export {
    useOrder,
}