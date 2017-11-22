import { PlatformUser } from './../../model/platform-user.model';

export interface State {
    currentUser: PlatformUser | null;
}

export const initialState: State = {
    currentUser: null
};
