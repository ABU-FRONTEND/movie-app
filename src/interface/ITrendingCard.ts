export default interface ITrendingCard {
    id: string
    title: string
    img: string
    year: string
    type: string
    rating: string
    thumbnail: {
        trending: {
            small: string
            large: string
        }
    }
    category:string
}