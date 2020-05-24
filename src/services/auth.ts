import { Api } from './api';

export class SettingsApi extends Api {
    signIn() {
        return this.api.get('oauth/entry/confirm').then((response: any)=> response.data);
    }
}