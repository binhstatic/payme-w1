import { takeLatest, all, call, put } from 'redux-saga/effects';

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from './category.action';

import { CATEGORIES_ACTION_TYPES, Category } from './category.types';
import { getCategories } from '../../utils/api/categoriesApi';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray: Category[] = yield call(getCategories);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
