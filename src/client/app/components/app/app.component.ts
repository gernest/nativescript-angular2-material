// angular
import {ChangeDetectionStrategy} from '@angular/core';
// app
import {AuthService, DatabaseService} from '../../frameworks/academy/index';
import {NameListService} from '../../frameworks/app/index';
import {AnalyticsService} from '../../frameworks/analytics/index';
import {RouteComponent, PlatformDirective} from '../../frameworks/core/index';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdToolbar } from '@angular2-material/toolbar';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

var firebase = require('firebase');

@RouteComponent({
    moduleId: module.id,
    selector: 'sd-app',
    viewProviders: [NameListService],
    templateUrl: 'app.component.html',
    directives: [
        MD_SIDENAV_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdToolbar,
        MdIcon,
        PlatformDirective
    ],
    changeDetection: ChangeDetectionStrategy.Default, // Everything else uses OnPush
    providers: [MdIconRegistry]
})
export class AppComponent {

    constructor(public analytics: AnalyticsService, public database: DatabaseService, public auth: AuthService) {

    }
}

