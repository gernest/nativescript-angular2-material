import {Injectable, Inject} from '@angular/core';
import {Observable} from 'Rxjs';

import {FIREBASE} from '../../academy/index';
import {DatabaseService} from './database.service';

@Injectable()
export class AuthService {

    constructor(@Inject(FIREBASE) public firebase: any) {
        this.authorize();
    }

    /**
     * Authorizes the user object through Google OAuth Services
     * Updates the user reference object in Firebase
     */
    authorize() {
        this.promptOAuthLogin().subscribe(() => {}, (error) => {
            console.log('Error loading Google\'s OAuth Window', error);
        }, () => {
            this.updateAuthorizedUser();
         });
    }

    /**
     * Refreshes the authorized user's object or prompts for a new OAuth instance
     *
     * @private
     * @returns {Observable<any>}
     */
    private promptOAuthLogin(): Observable<any> {
        return new Observable((observer: any) => {
            let provider = new this.firebase.auth.GoogleAuthProvider();
            if (!this.firebase.auth().currentUser) {
                this.firebase.auth().signInWithPopup(provider).then((result: any) => {
                    observer.complete();
                }).catch((error: any) => {
                    console.log('error', error);
                    observer.error(error);
                });
            }
        });
    }

    /**
     * Updates the authorized user object in Firebase
     *
     * @param {*} user The Google OAuth user instance object
     */
    updateAuthorizedUser() {
        let user = this.firebase.auth().currentUser;
        if (user) {
            var userRef = this.firebase.database().ref('/users/' + user.uid);
            userRef.update({
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                last_access_timestamp: Date.now()
            });
        }
    }

    logout() {
        this.firebase.auth().signOut();
    }

}