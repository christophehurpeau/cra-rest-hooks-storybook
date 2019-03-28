import { storiesOf } from '@storybook/react';
import React from 'react';
import App from './App';

storiesOf('App', module)
    .add('App', () => {
        return <App />;
    });
