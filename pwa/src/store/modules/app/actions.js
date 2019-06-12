import {
    STORE_USER,
} from './mutations';

export default {
    storeUser: (store, data) => {
        store.commit(STORE_USER, data);
    }

};