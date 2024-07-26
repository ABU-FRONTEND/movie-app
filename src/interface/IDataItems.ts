export default interface IDataItems {
    title: string,
    year: string,
    type: string,
    rating: string
    thumbnail: {
        regular: {
            large: string
        }
    },
    id: string,
    img: string,
    category: string,
    refetch: () => void
}