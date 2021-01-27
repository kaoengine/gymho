export interface InitializeAppArgsClient {
    authDomain?: string;
    apiKey?: string;
    databaseURL?: string;
    firebase: any;
    projectId?: string;
    messagingSenderId?: string;
    storageBucket?: string;
}

export type FirebaseCredential = {
    type: string;
    project_id: string;
    private_key_id: string;
    private_key: string;
    client_email: string;
    client_id: string;
    auth_uri: string;
    token_uri: string;
    auth_provider_x509_cert_url: string;
};

export interface InitializeAppArgsServer {
    firebase: any;
    databaseURL: string;
    credential: FirebaseCredential;
}

export const initializeFirebaseAppClient = (
    config: InitializeAppArgsClient
) => {
    const {
        firebase,
        databaseURL,
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        ...restMaybe
    } = config

}
