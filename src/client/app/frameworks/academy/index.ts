import {OpaqueToken} from '@angular/core';

// libs
import {provideStore} from '@ngrx/store';

// app
import {BadgeService, badgeListReducer} from './services/badge.service';

export const FIREBASE: OpaqueToken = new OpaqueToken('firebase');

export const ACADEMY_PROVIDERS: any[] = [
    // BadgeService,
    provideStore({
        badges: badgeListReducer
    })
];

// services
export * from './services/database.service';
export * from './services/auth.service';
export * from './services/badge.service';