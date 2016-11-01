import { PostBounty } from "./action"

export function run(event: any, context: any, callback: any) {
  PostBounty.action({}, event, context)
    .then(res => callback(null, res))
};


//  check format JSON-schema

// inject dependencies