import { REPOSACTION, REPOSACTIONSUCCESS, SINGLREPOSACTION, SINGLREPOSACTIONSUCCESS,LOADING } from "../actions/reposAction";

export function getReposRequest(searchedRepos, page) {
  return { type: REPOSACTION, payload: { searchedRepos, page } };
}

export function getReposRequestSucceed(repos) {
  return { type: REPOSACTIONSUCCESS, payload: { repos } };
}

export function getSinglReposRequest(id) {
  return { type: SINGLREPOSACTION, payload: { id } };
}

export function getSinglReposRequestSucceed(repo) {
  return { type: SINGLREPOSACTIONSUCCESS, payload: { repo } };
}
export function loadingType() {
  return { type:LOADING, payload: {} };
}