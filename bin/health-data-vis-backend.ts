#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { HealthDataVisBackendStack } from '../lib/health-data-vis-backend-stack';

const app = new cdk.App();
new HealthDataVisBackendStack(app, 'HealthDataVisBackendStack');
