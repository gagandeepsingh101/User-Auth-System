export const useSetCookie = (key, value, days) => {
	var expirationDate = new Date();
	expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
	var expires = expirationDate.toUTCString();

	document.cookie = `${key}=${value}; expires=${expires}; path=/`;
};
