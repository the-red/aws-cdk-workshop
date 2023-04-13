import { Stack, App, StackProps } from 'aws-cdk-lib';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';

export class CdkWorkshopStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // defines an AWS Lambda resource
    const hello = new Function(this, 'HelloHandler', {
      runtime: Runtime.NODEJS_14_X,
      code: Code.fromAsset('lambda'),
      handler: 'hello.handler',
    });

    // defines an API Gateway REST API resource backed by our "hello" function.
    new LambdaRestApi(this, 'Endpoint', {
      handler: hello,
    });
  }
}
