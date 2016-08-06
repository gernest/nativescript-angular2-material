import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';

// libs
import {Store, ActionReducer, Action} from '@ngrx/store';

// app
import {Analytics, AnalyticsService} from '../../analytics/index';
import {FIREBASE} from '../../academy/index';


const CATEGORY: string = 'QuestionList';
/**
 * ngrx setup --
 */
export const QUESTION_LIST_ACTIONS: any = {
    INIT: `[${CATEGORY}] INIT`,
};

export const questionListReducer: ActionReducer<any> = (state: any = [], action: Action) => {
    switch(action.type) {
        case QUESTION_LIST_ACTIONS:
            return [...action.payload];
        default:
            return state;
    }
};
/**
 * ngrx end --
 */

@Injectable()
export class QuestionService extends Analytics {

    public questions: Observable<any>;

    constructor(public analytics: AnalyticsService, @Inject(FIREBASE) public firebase: any, private store: Store<any>) {
        super(analytics);
        this.category = CATEGORY;
        this.questions = store.select('questions');
        this.init();
    }

    init() {
        // Load QuestionList
        // this.store.dispatch({ type: QUESTION_LIST_ACTIONS.INIT, payload: {} })
    }



}