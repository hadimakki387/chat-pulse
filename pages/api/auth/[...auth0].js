import { handleAuth , handleLogin} from "@auth0/nextjs-auth0";

export default handleAuth({
    //hon bas badna n3mol custom routes
    signup: handleLogin({authorizationParams:{screen_hint: "signup"}})
});