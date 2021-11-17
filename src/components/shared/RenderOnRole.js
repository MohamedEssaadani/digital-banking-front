import UserService from "../../services/UserService";
import PropTypes from "prop-types";

export default function RenderOnRole({roles, children}) {
    if (!UserService.hasRole(roles))
        return null

    return children
}

RenderOnRole.propTypes = {
    roles: PropTypes.arrayOf(PropTypes.string).isRequired
}