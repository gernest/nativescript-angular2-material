import {Injectable, Inject} from '@angular/core';

// libs
import {Store, ActionReducer, Action} from '@ngrx/store';

// app
import {FIREBASE} from '../../academy/index';
import {AuthService} from './auth.service';

const CATEGORY: string = 'BadgetList';

/**
 * ngrx setup start --
 */
export const BADGE_LIST_ACTIONS: any = {
    INIT: `[${CATEGORY}] INIT`
};

export const badgeListReducer: ActionReducer<any> = (state: any = [], action: Action) => {
    switch(action.type) {
        case BADGE_LIST_ACTIONS.INIT:
            return [...action.payload];
        default:
            return state;
    }
};
/**
 * ngrx end --
 */

@Injectable()
export class BadgeService {

    private database: any;

    constructor(private store: Store<any>) {
        // this.database = firebase.database();
        this.init();
    }

    init() {
        // console.log('init', this.auth.authUser);
        // var ref = this.database.ref('badges/' + this.auth.authUser.uid);
        // ref.on('value', (dataSnapshot: any) => {
        //     console.log('dataSnapshot');
        //     this.store.dispatch({ type: BADGE_LIST_ACTIONS.INIT, payload: dataSnapshot });
        // });
    }

}