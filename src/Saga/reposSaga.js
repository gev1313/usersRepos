import { all, call, put, takeLatest } from "redux-saga/effects";
import { request } from "../services/requestService";
import { REPOSACTION, SINGLREPOSACTION } from "../store/actions/reposAction";
import { getReposRequestSucceed, getSinglReposRequestSucceed } from "../store/action-creaters/reposActionCreator";
import { loadingType } from "../store/action-creaters/usersActionsCreator";

export function* getRepos({ payload }) {
  try {
    const { searchedRepos, page } = payload;
    yield put(loadingType());
    const { data } = yield call(request, "GET", `https://api.github.com/search/repositories?q=${searchedRepos}+in&per_page=9&page=${page}`, {});
    yield put(getReposRequestSucceed(data));
  } catch (error) {
    alert(error);
  }
}

function* getSingleRepo(action) {
  try {
    const { id } = action.payload;
    yield put(loadingType());
    const { data } = yield call(request, "GET", `https://api.github.com/repos${id}`, {});
    yield put(getSinglReposRequestSucceed(data));
  } catch (e) {
    console.log(e);
  }
}

export function* reposSagas() {
  yield all([
    takeLatest(REPOSACTION, getRepos),
    takeLatest(SINGLREPOSACTION, getSingleRepo)
  ]);
}