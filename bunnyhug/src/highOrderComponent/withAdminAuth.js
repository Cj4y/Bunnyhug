//use cutom react hook
import { useAdminAuth } from './../customHooks';

//pass the props
const WithAdminAuth = props => useAdminAuth(props) && props.children;

export default WithAdminAuth;