export default {
    currentAppData: state => {
        return state.appData;
    },
    currentAppUserData: state => {
        return state.appData.user;
    }
};