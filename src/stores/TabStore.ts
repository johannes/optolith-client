import * as ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AuthStore from './AuthStore';
import Store from './Store';

let _currentTab = 'herolist';
let _currentSection = 'main';

function _updateTab(tab: string) {
	_currentTab = tab;
}

function _updateSection(section: 'main' | 'hero' | 'group', tab?: string) {
	const before = _currentSection;

	_currentSection = section;

	if (tab) {
		_updateTab(tab);
	}
	else switch (section) {
		case 'main':
			if (before === 'hero') {
				if (AuthStore.getID() === null) {
					_currentTab = 'home';
				} else {
					_currentTab = 'herolist';
				}
			} else if (before === 'group') {
				_currentTab = 'grouplist';
			}
			break;
		case 'hero':
			_currentTab = 'profile';
			break;
		case 'group':
			_currentTab = 'master';
			break;
	}
}

class TabStoreStatic extends Store {

	getAll() {
		return {
			section: _currentSection,
			tab: _currentTab
		};
	}

	getCurrentID() {
		return _currentTab;
	}

	getCurrentSID() {
		return _currentSection;
	}

}

const TabStore = new TabStoreStatic(action => {
	switch( action.type ) {
		case ActionTypes.SET_TAB:
			_updateTab(action.tab);
			break;

		case ActionTypes.SET_SECTION:
			_updateSection(action.section);
			break;

		case ActionTypes.RECEIVE_REGISTRATION:
			_updateTab('confirmRegistration');
			break;

		case ActionTypes.RECEIVE_LOGOUT:
			_updateTab('home');
			break;

		case ActionTypes.CREATE_HERO:
			_updateSection('hero', 'rcp');
			break;

		case ActionTypes.RECEIVE_HERO_DATA:
			_updateSection('hero', 'profile');
			break;

		case ActionTypes.ASSIGN_RCP_OPTIONS:
			_updateTab('attributes');
			break;

		case ActionTypes.RECEIVE_USER_DELETION:
			_updateTab('login');
			break;

		default:
			return true;
	}

	TabStore.emitChange();
	return true;
});

export default TabStore;
