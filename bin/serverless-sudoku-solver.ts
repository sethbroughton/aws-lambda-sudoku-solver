#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import * as path from 'path';
import { NodejsFunction } from '@aws-cdk/aws-lambda-nodejs';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2';
import { LambdaProxyIntegration } from '@aws-cdk/aws-apigatewayv2-integrations';

export class ServerlessSudokuSolverStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const solver = new NodejsFunction(this, 'Solver', {
      entry: path.join(__dirname, 'solver.ts'),
      timeout: cdk.Duration.seconds(5),
      memorySize: 1024
    });

    const solverLambdaIntegration = new LambdaProxyIntegration({
      handler: solver,
    });

    const api = new HttpApi(this, 'solver-api');
    api.addRoutes({
      path: '/solve',
      methods: [ HttpMethod.POST, HttpMethod.GET ],
      integration: solverLambdaIntegration
    })

    new cdk.CfnOutput(this, "api-endpoint", {
      value: api.apiEndpoint,
      exportName: "api-endpoint"
    })

  }
}

const app = new cdk.App();
new ServerlessSudokuSolverStack(app, 'ServerlessSudokuSolverStack');
