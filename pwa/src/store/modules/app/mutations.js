export const STORE_USER = 'STORE_USER';

export default {
    [STORE_USER](state, data) {
        state.appData = Object.assign(state.appData, data);
    },
};