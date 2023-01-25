import { Output } from '@pulumi/pulumi';

export const variables = {
  region: 'eu-west-1' as const, // <-- change this to your region
  dynamoDBTables: {} as Record<string, Output<string>>,
  $env:AWS_ACCESS_KEY_ID = "AKIA4P4ZWUNQXXK4WGL2"; $env:AWS_SECRET_ACCESS_KEY = "<YOUR_SECRET_ACCESS_KEY>"; $env:AWS_REGION = "<YOUR_AWS_REGION>"
};
