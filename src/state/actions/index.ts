import { ActionType } from '../action-types';

interface SerachRepositoriesAction {
  type: ActionType.SERCH_REPOSITORIES;
}
interface SerachRepositoriesSuccessAction {
  type: ActionType.SERCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SerachRepositoriesErrorAction {
  type: ActionType.SERCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SerachRepositoriesAction
  | SerachRepositoriesSuccessAction
  | SerachRepositoriesErrorAction;
