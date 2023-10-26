import * as dotenv from "dotenv";
dotenv.config({path:'./src/testData/env/.env'});

export default class ENV {
    public static BASEURL = process.env.APP_BASEURL;
    public static USERNAME = process.env.APP_USERNAME;
    public static PASSWORD = process.env.APP_PASSWORD;
}