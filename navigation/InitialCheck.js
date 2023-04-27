import React from "react";
import { checkUserAuthState } from "../utils/hooks/checkUserAuthState";
import LoggedInStack from './LoggedInStack';
import SignUporInStack from './SignUporInStack';

export default function initialCheck() {
    const { user } = checkUserAuthState();

    return user ? <LoggedInStack /> : <SignUporInStack />;
}