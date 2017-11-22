import { User } from './../../model/user.model';

export interface State {
    userIsLogged: boolean;
    loggedUser: User | null;
}

export const initialState: State = {
    userIsLogged: false,
    loggedUser: null,
};
