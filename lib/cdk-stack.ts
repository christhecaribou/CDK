import ec2 = require('@aws-cdk/aws-ec2');
import * as cdk from '@aws-cdk/core';

export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // create the instance
    const instance = new ec2.CfnInstance(this, id, {
      imageId: "ami-0e999cbd62129e3b1",
      instanceType: "t2.micro",
      networkInterfaces: [
        {
          deviceIndex: "0",
          subnetId: "subnet-a86f7ff2"
        }
      ],
    });
  }
}
