import { App, Stack, StackProps } from "aws-cdk-lib";
import * as lambda_service from "./lambda_service";

export class HealthDataVisBackendStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda_service.LambdaService(this, "Lambda");
  }
}
