
export const hello = async (event: any, _context: any) => {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      message: 'Function from yoongles handler',
      input: event,
    }, null, 2),
  };
}
