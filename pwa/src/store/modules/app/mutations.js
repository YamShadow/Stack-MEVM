export const STORE_USER_ID = 'STORE_USER_ID';
export const STORE_USER = 'STORE_USER';

export default {
    [STORE_USER_ID](state, data) {
        state.appData = Object.assign(state.appData, data);
    },
    [STORE_USER](state, data) {
        state.appData = Object.assign(state.appData, data);
    },
};