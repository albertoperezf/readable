export const ALL_CATEGORIES = 'ALL_CATEGORIES'
export const ALL_POST_FROM_CATEGORY = 'ALL_POST_FROM_CATEGORY'

export const allCAtegories = () => ({
    type: ALL_CATEGORIES
});

export const allPostFromCategory = category => ({
    type: ALL_POST_FROM_CATEGORY,
    category
});