import {provideRouter, RouterConfig} from '@angular/router';

import {ProfileRoutes} from '../profile/profile.routes';
import {LeaderboardRoutes} from '../leaderboard/leaderboard.routes';
import {TeamRoutes} from '../team/team.routes';

export const routes: RouterConfig = [
  ...ProfileRoutes,
  ...LeaderboardRoutes,
  ...TeamRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
