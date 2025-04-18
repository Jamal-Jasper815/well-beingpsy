 
// this line of import is added
import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}


// this line of   is added if smth went wrong remove it 
export const onRequestError = Sentry.captureRequestError;
 