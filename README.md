# Sudoku Solver using AWS Lambda!

Want to try it out? <br>

```
curl -X POST https://4usz7bqf76.execute-api.us-east-1.amazonaws.com/solve -H "Content-Type: application/json" -d '{ "board": [[0,0,4,0,5,0,0,0,0],[9,0,0,7,3,4,6,0,0],[0,0,3,0,2,1,0,4,9],[0,3,5,0,9,0,4,8,0],[0,9,0,0,0,0,0,3,0],[0,7,6,0,1,0,9,2,0],[3,1,0,9,7,0,2,0,0],[0,0,9,1,8,2,0,0,3],[0,0,0,0,6,0,1,0,0]]}'   
```
<br>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/11280759-47efc2d9-3e15-4c51-8638-6bef72980655?action=collection%2Ffork&collection-url=entityId%3D11280759-47efc2d9-3e15-4c51-8638-6bef72980655%26entityType%3Dcollection%26workspaceId%3D1f01fabf-5acf-4e49-aead-1485c7c3dafc)

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template



