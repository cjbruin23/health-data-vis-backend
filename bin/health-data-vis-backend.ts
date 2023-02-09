#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { HealthDataVisBackendStack } from "../lib/health-data-vis-backend-stack";

import "source-map-support/register";

const app = new App();
new HealthDataVisBackendStack(app, "HealthDataVisBackendStack");
