export const ALL_CATEGORIES = 'ALL_CATEGORIES'
export const ALL_POST_FROM_CATEGORY = 'ALL_POST_FROM_CATEGORY'

// Get all of the categories available for the app. List is found in categories.js. Feel free to extend this list as you desire.
export const allCategories = () => ({
    type: ALL_CATEGORIES
});

// Get all of the posts for a particular category.
export const allPostFromCategory = category => ({
    type: ALL_POST_FROM_CATEGORY,
    category
});