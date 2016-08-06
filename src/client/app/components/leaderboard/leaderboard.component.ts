// angular
import {ChangeDetectionStrategy} from '@angular/core';
// libs
import {Store} from '@ngrx/store';
import {Observable} from 'Rxjs';

// app
import {FormComponent} from '../../frameworks/core/index';

import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@FormComponent({
    moduleId: module.id,
    selector: 'sd-leaderboard',
    templateUrl: 'leaderboard.component.html',
    styleUrls: ['leaderboard.component.css'],
    directives: [MD_TABS_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MdIconRegistry]
})

export class LeaderboardComponent {

    constructor(private store: Store<any>) {

    }



}
