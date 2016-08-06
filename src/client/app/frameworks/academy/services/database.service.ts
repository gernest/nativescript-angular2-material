import {Injectable, Inject} from '@angular/core';
import {FIREBASE} from '../../academy/index';

@Injectable()
export class DatabaseService {

    private database: any;
    private onSync: Function;
    private userID: string;

    constructor( @Inject(FIREBASE) firebase: any) {
        console.log('Constructing DatabaseService');
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBNkWQ5A7IngcDNcAzwGR7PduDE8hCW_n4",
            authDomain: "academy-ec437.firebaseapp.com",
            databaseURL: "https://academy-ec437.firebaseio.com",
            storageBucket: "academy-ec437.appspot.com",
        };
        firebase.initializeApp(config);
        this.database = firebase.database();
    }

    sync(path: string, onValueReceived: Function): void {
        this.onSync = (snapshot: any) => onValueReceived(snapshot.val());
        this.database.ref(path).on('value', this.onSync);
    }

    addChild(path: string, data: any, callback?: Function): void {
        this.database.ref(path).push(data, (err: any) => {
            if (callback && !err) {
                callback();
            }
        });
    }
}