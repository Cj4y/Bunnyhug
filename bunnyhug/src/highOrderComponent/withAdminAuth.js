//use cutom react hook
import { useAdminAuth } from './../customHooks';

//either redirect the user, or pass the props
const WithAdminAuth = props => useAdminAuth(props) && props.children;

export default WithAdminAuth;