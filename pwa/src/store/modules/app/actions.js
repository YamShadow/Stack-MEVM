import {
    STORE_USER_ID,
    STORE_USER,
} from './mutations';

export default {
    storeUserId: (store, data) => {
        store.commit(STORE_USER_ID, data);
    },
    storeUser: (store, data) => {
        store.commit(STORE_USER, data);
    }

};