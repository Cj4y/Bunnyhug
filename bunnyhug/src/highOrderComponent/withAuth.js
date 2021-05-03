
import { useAuth } from './../customHooks';

//either redirect the user, or pass the props
const WithAuth = props => useAuth(props) && props.children;

export default WithAuth;