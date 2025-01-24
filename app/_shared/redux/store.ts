import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./reducers/authSlice";
import breadCrumbSlice from "./reducers/breadCrumbSlice";

const rootReducer = combineReducers({
  auth: authSlice,
  breadcrumb: breadCrumbSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "breadcrumb", "theme", "questions", "questionnaire"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: combineReducers({
    root: persistedReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export { store, persistor };
