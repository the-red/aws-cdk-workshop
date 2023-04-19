import { Stack, App, StackProps } from 'aws-cdk-lib';
import { Architecture, Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';

export class CdkWorkshopStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new NodejsFunction(this, 'lambda', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'handler',
      entry: 'lambda/hello.ts',
      architecture: Architecture.ARM_64,
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new LambdaRestApi(this, 'CdkWorkshopEndpoint', {
      handler: hello,
    });
  }
}
