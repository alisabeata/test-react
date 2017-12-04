import {createSelector} from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

export const filtratedArticlesSelector = createSelector(filtersGetter, articlesGetter, (filters, articles) => {
  const {selected, dateRange: {from, to}} = filters;

  return articles.filter(article => {
    const published = Date.parse(article.date);

    return (!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  });
});