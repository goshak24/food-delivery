import { featuredRestaurants } from '../constants';

export const setFiltered = (query) => {
    if (!query) return featuredRestaurants;
    return featuredRestaurants.filter(
        (restaurant) =>
            restaurant.title.toLowerCase().includes(query.toLowerCase()) ||
            restaurant.description.toLowerCase().includes(query.toLowerCase()) ||
            restaurant.category.toLowerCase().includes(query.toLowerCase())
    );
}; 