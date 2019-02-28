'use es6';

let rp = require('request-promise');

/**
 * Lyft services controller
 */
module.exports = class lyftController {


    /**
     * Creates a new instance of a lyft controller
     * @param clientId {string}
     * @param clientSecret {string}
     */
    constructor(clientId, clientSecret) {
        this.clientId = clientId;
        this.clientSecret = clientSecret;

        this.tokenType;
        this.accessToken;
        this.expiresIn;
        this.scope;

        this.expirationDate;
    }

    /** 
     * Obtains an access token to be used in future API calls to Lyft
     * @return {string}     access_token : a token provided by lyft
     */
    getAccessToken() {
        return rp({
                method: 'POST',
                uri: 'https://api.lyft.com/oauth/token',
                auth: {
                    username: this.clientId,
                    password: this.clientSecret,
                },
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    grant_type: 'client_credentials',
                },
                json: true,
                timeout: 5000,
            })
            .then(result => {
                this.tokenType = result.token_type;
                this.accessToken = result.access_token;
                this.expiresIn = result.expires_in;
                this.scope = result.scope;

                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                this.expirationDate = tomorrow;

                return result;
            })
            .catch(function (err) {
                throw new Error(err);
            });
    }


};
