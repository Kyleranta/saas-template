/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '',
  USER_POOL_ID: '',
  IDENTITY_POOL_ID: 'us-east-1:8d2fc26d-dd9d-4ace-a701-b8ad07d6c2f1',
  GRAPHQL_ENDPOINT: '',
};

export default configDevelopment;
