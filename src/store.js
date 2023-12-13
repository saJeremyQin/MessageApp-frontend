import {reactive} from 'vue';

let store = {
    state: {
        messages: []
    }
};
const storeState = reactive(store.state);
export default storeState;
