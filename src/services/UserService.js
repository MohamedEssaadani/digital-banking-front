import Keycloak from "keycloak-js"

const _kc = new Keycloak("/keycloak.json")
/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */

const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'login-required',
    }).then((authenticated) => {
        if (authenticated) {
            localStorage.setItem("db-access-token", _kc.token);
            localStorage.setItem("db-refresh-token", _kc.refreshToken);
            onAuthenticatedCallback()
        } else {
            console.warn("Not authenticated!")
            doLogin()
        }
    })

}


const doLogin = _kc.login
const doLogout = _kc.logout

const getToken = () => _kc.token

const updateToken = (successCallBack) => {
    _kc.updateToken(5)
        .then(successCallBack)
        .catch(doLogin)
}

const isLoggedIn = () => !!_kc.token;

const getUsername = () => _kc.tokenParsed?.preferred_username


const getUserFullName = () => _kc.tokenParsed.name


const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));

const userProfile = () => `${_kc.authServerUrl}/realms/Digital-Banking/account`

const UserService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    getUserFullName,
    userProfile
};

export default UserService;