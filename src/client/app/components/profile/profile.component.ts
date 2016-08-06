// angular
import {ChangeDetectionStrategy} from '@angular/core';
// libs
import {Store} from '@ngrx/store';
import {Observable} from 'Rxjs';

// app
import {FormComponent} from '../../frameworks/core/index';
import {NameListService} from '../../frameworks/app/index';

import {AuthService, BadgeService} from '../../frameworks/academy/index';

import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@FormComponent({
    moduleId: module.id,
    selector: 'sd-profile',
    templateUrl: 'profile.component.html',
    styleUrls: ['profile.component.css'],
    directives: [MD_TABS_DIRECTIVES, MD_BUTTON_DIRECTIVES, MdIcon],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MdIconRegistry]
})

export class ProfileComponent {

    constructor(private store: Store<any>, public authService: AuthService) {

    }



}
