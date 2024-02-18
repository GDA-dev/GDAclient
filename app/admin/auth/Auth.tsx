import React, { useState, useEffect } from 'react';
import { Outlet } from "@remix-run/react";
import Sidebar from '../components/sidebar';
import Login from './Login';
import checkCredentials from '../../../services/GET/checkCredentials';

export default function Auth() {

	const [loggedIn, setLoggedIn] = useState(false);

	const createToken = (username: string, password: string) => {

		const token = localStorage.getItem('auth');

		if (token) {
			localStorage.removeItem('auth');
		};

		const tokenArray = [username, password];
		localStorage.setItem('auth', JSON.stringify(tokenArray));

	};

	const checkValidity = async (username: string, password: string) => {

		const res = await checkCredentials(username, password);

		if (res === true) {

			const resArray = [username, password];
			const token = localStorage.getItem('auth');

			if (token) {

				const existingToken = [token[0], token[1]];

				if (resArray === existingToken) {
					setLoggedIn(true);
					return true;
				} else {
					createToken(username, password);
				};
			};

			createToken(username, password);
			setLoggedIn(true);
			return true;

		} else {
			return undefined;
		};
	};

	const executeCheckValidity = async (username: string, password: string) => {
		
		const res = await checkValidity(username, password);

		if (res === true) {
			setLoggedIn(true);
		};
	};

	useEffect(() => {

		const authToken = localStorage.getItem('auth');

		if (authToken) {

			const authTokenArray = JSON.parse(authToken);
			const authTokenUsername = authTokenArray[0];
			const authTokenPassword = authTokenArray[1];
			executeCheckValidity(authTokenUsername, authTokenPassword);

		};

	}, [loggedIn, setLoggedIn]);

	return (
		<>
			{ loggedIn ? <Sidebar /> : <Login updateLoginState={(username, password) => checkValidity(username, password)} /> }
			{ loggedIn && <Outlet /> }
		</>
	);
};