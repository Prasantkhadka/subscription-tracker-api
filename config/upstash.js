import { Client as UpstashClient } from "@upstash/workflow";

import { QSTASH_TOKEN, QSTASH_URL } from "./env.js";

export const workflowClient = new UpstashClient({
  baseUrl: QSTASH_URL,
  token: QSTASH_TOKEN,
});
