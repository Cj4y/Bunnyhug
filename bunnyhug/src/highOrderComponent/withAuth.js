
import { useAuth } from './../customHooks';

//pass the props
const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;