import { createAction } from '@reduxjs/toolkit';

export const fetchPhoneBookRequest = createAction('phoneBook/fetch/request');
export const fetchPhoneBookSuccess = createAction('phoneBook/fetch/success');
export const fetchPhoneBookError = createAction('phoneBook/fetch/error');

export const addPhoneBookRequest = createAction('phoneBook/add/request');
export const addPhoneBookSuccess = createAction('phoneBook/add/success');
export const addPhoneBookError = createAction('phoneBook/add/error');

export const removePhoneBookRequest = createAction('phoneBook/remove/requeest');
export const removePhoneBookSuccess = createAction('phoneBook/remove/success');
export const removePhoneBookError = createAction('phoneBook/remove/error');
