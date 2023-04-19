import * as cdk from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

test('Test', () => {
  const app = new cdk.App();
  const stack = new CdkWorkshopStack(app, 'MyTestStack');

  const template = Template.fromStack(stack);
  template.resourceCountIs('AWS::Lambda::Function', 1);
  template.resourceCountIs('AWS::ApiGateway::RestApi', 1);

  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.handler',
    Runtime: 'nodejs16.x',
  });
});
