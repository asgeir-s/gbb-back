import { Response } from "../lib/typings/response"
import { Context } from "../lib/typings/aws-lambda"
import { config } from "../config"

export module PostBounty {

  export interface Inject {
  }

  export function action(inn: Inject, event: any, context: Context): Promise<Response> {


    config.githubToken
    const res: Response = {
      statusCode: 200,
      body: "OK!"
    }

    return Promise.resolve(res)
  }

}

// retreive issue

// save issue in db

// generate btc address 

// save btc address ti db

// return btc address