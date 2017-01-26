import { get, getAllByCategory, getObjByCategory } from './ListStore';
import * as ActionTypes from '../constants/ActionTypes';
import * as Categories from '../constants/Categories';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ELStore from './ELStore';
import PhaseStore from './PhaseStore';
import Store from './Store';

const CATEGORY = Categories.TALENTS;

let _sortOrder = 'group';
let _ratingVisible = true;

function _updateSortOrder(option: string) {
	_sortOrder = option;
}

function _updateRatingVisibility() {
	_ratingVisible = !_ratingVisible;
}

class TalentsStoreStatic extends Store {

	getAll() {
		return getAllByCategory(CATEGORY) as Talent[];
	}

	getForSave() {
		const result = new Map<string, number>();
		this.getAll().forEach(e => {
			let { id, value } = e;
			if (value > 0) {
				result.set(id, value);
			}
		});
		return {
			active: Array.from(result),
			ratingVisible: _ratingVisible
		};
	}

	getSortOrder() {
		return _sortOrder;
	}

	isRatingVisible() {
		return _ratingVisible;
	}

}

const TalentsStore = new TalentsStoreStatic(action => {
	switch( action.type ) {
		case ActionTypes.ADD_TALENT_POINT:
		case ActionTypes.REMOVE_TALENT_POINT:
			break;

		case ActionTypes.SET_TALENTS_SORT_ORDER:
			_updateSortOrder(action.option);
			break;

		case ActionTypes.SWITCH_TALENT_RATING_VISIBILITY:
			_updateRatingVisibility();
			break;

		default:
			return true;
	}

	TalentsStore.emitChange();
	return true;
});

export default TalentsStore;
