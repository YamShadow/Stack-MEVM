"use strict";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
    appData: {
        userID: false,
        user: false
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};