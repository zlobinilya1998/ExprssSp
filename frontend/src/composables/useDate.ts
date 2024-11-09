function useDate() {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }

    const formatToText = (dateString: string) => new Date(dateString).toLocaleDateString('ru-Ru', options);

    return {
        formatToText,
    }
}

export {
    useDate
}