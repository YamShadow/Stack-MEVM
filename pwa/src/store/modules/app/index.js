"use strict";

import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const state = {
    appData: {
        user: false
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};