
export const hello = async (event: any, _context: any) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Function from handler  hellooooooooo',
      input: event,
    }, null, 2),
  };
}

//exports.handler = async function hello(event: any, _context: any) {
//exports.handler = hello;