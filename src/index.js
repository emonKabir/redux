import configureStore from "./store/configureStore";
import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";

const store = configureStore();
const unsubscribe = store.subscribe(() =>
  console.log("store changed !! ", store.getState())
);
store.dispatch(bugAdded({ description: "bug 1" }));
store.dispatch(bugAdded({ description: "bug 2" }));
store.dispatch(bugAdded({ description: "bug 3" }));
store.dispatch(bugAdded({ description: "bug 4" }));
store.dispatch(bugAdded({ description: "bug 5" }));

store.dispatch(bugResolved({ id: 1 }));
store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
