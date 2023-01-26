/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://main.d1yy7zqjauza9q.amplifyapp.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'us-east-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '4re63qn55f1ns6jveed2eoloe6',
  USER_POOL_ID: 'us-east-1_99RuGPAMG',
  IDENTITY_POOL_ID: 'us-east-1:8d2fc26d-dd9d-4ace-a701-b8ad07d6c2f1',
  GRAPHQL_ENDPOINT: 'https://gkbt4qs5pvfenbktvra3btxxx4.appsync-api.us-east-1.amazonaws.com/graphql',
};

export default configDevelopment;
