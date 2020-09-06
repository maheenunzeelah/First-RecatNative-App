import { registerRootComponent } from 'expo';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './src/store/configureStore'
import App from './App';

const store=configureStore();
const RNRedux=()=>(
    <Provider store={store}>
        <App />
    </Provider>
)
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(RNRedux);
