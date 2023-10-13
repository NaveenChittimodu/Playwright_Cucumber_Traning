import dotenv from "dotenv";
dotenv.config({path:'./src/testData/env/.env'});

export default class ENV {
    public static BASEURL = process.env.APP_BASEURL;
    public static USERNAME = process.env.APP_USERNAME;
    public static PASSWORD = process.env.APP_PASSWORD;
    public static FIRSTNAME = process.env.APP_PIMFIRSTNAME;
    public static MIDDLENAME = process.env.APP_PIMMIDDLENAME;
    public static LASTNAME = process.env.APP_PIMLASTNAME;
    public static EMPLOYEEID = process.env.APP_PIMEMPLOYEEID;
    public static OTHERID = process.env.APP_PIMOTHERID;
    public static SNNNUMBER = process.env.APP_PIMSNNNUMBER;
    public static DRIVERSLICENSENUMBER = process.env.APP_PIMDRIVERSLICENSENUMBER;
    public static LICENSEEXPIRYDATE = process.env.APP_PIMLICENSEEXPIRYDATE;
    public static SINNUMBER = process.env.APP_PIMSINNUMBER;
    public static NATIONALITYDROPDOWNTEXT = process.env.APP_NATIONALITYDROPDOWNTEXT;
    public static MARITALSTATUSDROPDOWNTEXT = process.env.APP_MARITALSTATUSDROPDOWNTEXT;
    public static BLOODTYPEDROPDOWNTEXT = process.env.APP_BLOODTYPEDROPDOWNTEXT;
    public static ATTACHMENTCOMMENT = process.env.APP_ATTACHMENTCOMMENT
}