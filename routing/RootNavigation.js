import React from 'react';

export const navigationRef = React.createRef();

export function RootNavigation(navigateTo) {
    navigationRef.current?.navigate(navigateTo);
}