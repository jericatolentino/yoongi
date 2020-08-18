export const myHandler = async (event: any, _context: any) => {
  let data = event;

  if (event.body) { data = JSON.stringify(event.body,null,2); }

  console.log('Event from handler:' + JSON.stringify(data,null,2));
  console.log('Context from handler:' + JSON.stringify(_context,null,2));

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({
      message: 'Function from yoongles handler',
      input: data,
    }, null, 2),
  };
}
