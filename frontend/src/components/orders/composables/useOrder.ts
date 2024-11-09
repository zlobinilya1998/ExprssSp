import { computed } from "vue";
import { useCurrency } from '@/composables/useCurrency';
import { useDate } from '@/composables/useDate';
import { IOrderProps } from "@/components/orders/Order.vue";
import { OrderStatus } from "@/models/Order";

function useOrder(props: IOrderProps) {
    const date = useDate();
    const currency = useCurrency();
    const creationDate = computed(() => date.formatToText(props.item.createdAt));
    const orderAmount = computed(() => currency.formatToText(props.item.totalAmount))

    const orderStatus = computed(() => {
        const map = new Map<OrderStatus,string>([
            [OrderStatus.Create, 'создан'],
        ])

        return map.get(props.item.status);
    })

    return {
        creationDate, orderAmount, orderStatus
    }
}

export {
    useOrder,
}