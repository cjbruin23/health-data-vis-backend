import { Context, APIGatewayEvent } from "aws-lambda";

const handler = (event: APIGatewayEvent, context: Context) => {
  try {
    const method = event.httpMethod;
    if (method === "GET") {
      if (event.path === "/") {
        const body = {
          data: "This is data being returned",
        };
        return {
          statusCode: 200,
          headers: {},
          body: JSON.stringify(body),
        };
      }
    }

    return {
      statusCode: 200,
      headers: {},
      body: JSON.stringify(body),
    };
  } catch (err: any) {
    var body = err.stack || JSON.stringify(err, null, 2);
    return {
      statusCode: 400,
      headers: {},
      body: JSON.stringify(body),
    };
  }
};

export default handler;
