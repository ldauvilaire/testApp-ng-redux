import { PlatformUser } from './../../model/platform-user.model';

export interface State {
    users: PlatformUser[];
}

export const initialState: State = {
    users: []
};
