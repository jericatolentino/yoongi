import AWS, { AWSError } from 'aws-sdk';
import { InvocationResponse } from 'aws-sdk/clients/lambda';

interface paramsType {
    FunctionName: string,
    Payload: any
}

AWS.config.update(
    {
        accessKeyId: 'AKIAWP6MJMQMOG6XV4VP', 
        secretAccessKey: '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',
        region: 'us-east-1'
    }
);

var lambda = new AWS.Lambda();
var params: paramsType = {
  FunctionName: 'yoongi-dev-csrf_function',
  Payload: 'Placeholder'
};


export const sendLambda: any = (data: any) => {
    if (data) {params.Payload = JSON.stringify(data);}

    return lambda.invoke(params, (err: AWSError, data: InvocationResponse) => {
        if (err) console.log('Error occured', err, err.stack);
        else     console.log('Called Lambda successfully', JSON.stringify(data,null,2));
    });
};


