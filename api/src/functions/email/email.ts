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
  const userData = JSON.parse(event.body)
  console.log('userData', userData)
  logger.info(`${event.httpMethod} ${event.path}: email function`)

  const msg = {
    to: 'info@synclinesoftwaresolutions.com',
    from: 'info@synclinesoftwaresolutions.com',
    subject: 'Contact Form Submission',
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

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
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
