import React from 'react';

export const navigationRef = React.createRef();

export function navigateTo(destination) {
    navigationRef.current?.navigate(destination);
}