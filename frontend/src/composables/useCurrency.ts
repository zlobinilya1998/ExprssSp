function useCurrency() {
    const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
    })

    const formatToText = (currency: number): string => formatter.format(currency);


    return {
        formatToText
    }
}

export {
    useCurrency
}