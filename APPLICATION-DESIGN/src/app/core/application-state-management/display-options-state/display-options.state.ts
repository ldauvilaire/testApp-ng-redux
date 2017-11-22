/**
 * Application State Declaration
 * defines properties shared in the whole application
 * how to get the values
 * To change these values use the actions and the reducer
 */
export interface State {
    showSidenav: boolean;
    showResources: boolean;
    currentLanguage: string;
    languages: string[];
}
// init
export const initialState: State = {
    showSidenav: false,
    showResources: false,
    currentLanguage: 'fr',
    languages: ['fr', 'en']
};

