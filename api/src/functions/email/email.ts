import sgMail from '@sendgrid/mail'
import type { APIGatewayEvent, Context } from 'aws-lambda'

import { logger } from 'src/lib/logger'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, _context: Context) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'https://pmhadvocacy.com',
        'Access-Control-Allow-Methods': 'OPTIONS, POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({
        data: 'Email sent successfully',
      }),
    }
  }

  // Process POST request
  if (event.httpMethod === 'POST') {
    try {
      console.log('event.body', event.body)
      // Decode from Base64 then parse as JSON
      const decodedBody = Buffer.from(event.body, 'base64').toString('utf-8')
      const userData = JSON.parse(decodedBody)

      logger.info(`${event.httpMethod} ${event.path}: email function`)

      if (!userData.firstName || !userData.email || !userData.message) {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: 'Missing required fields' }),
        }
      }

      const msg = {
        to: 'tre@pmhadvocacy.com',
        from: userData.email,
        subject: 'PMH Contact Submission',
        text: `
      Name: ${userData.firstName}
      Email: ${userData.email}
      Message: ${userData.message}
      Phone: ${userData.phoneNumber}
    `,
        html: `
      <strong>Name:</strong> ${userData.firstName} ${userData.lastName}<br>
      <strong>Email:</strong> ${userData.email}<br>
      <strong>Message:</strong><br>${userData.message}<br>
      <strong>Phone:</strong><br>${userData.phoneNumber}
    `,
      }

      await sgMail.send(msg)

      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://pmhadvocacy.com',
        },
        body: JSON.stringify({
          data: 'Email sent successfully',
        }),
      }
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.body)
      }

      return {
        statusCode: 500,
        body: JSON.stringify({
          error: 'An error occurred while trying to send the email',
        }),
      }
    }
  }

  // If the HTTP method is not supported (neither OPTIONS nor POST)
  return {
    statusCode: 405,
    body: JSON.stringify({
      error: 'Method Not Allowed',
    }),
  }
}
