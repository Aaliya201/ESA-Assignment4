

    'use strict';

    // require express rate limit
    const rateLimit = require("express-rate-limit");
    
    // applying rate limit of 1 hour
    const limit = rateLimit({
        windowMs: 60 * 60 * 1000, // 60 minutes minutes
        max: 50, // limit each 'from' field to 50 requests per windowMs
        statusCode: 429,
        message: "Too many requests created from this 'from' field, please try again in an hour",
        headers: true
    });
    
    // create App function
    module.exports = function(app) {
        var SMSList = require('../controllers/todoController');
    
        // SMS Routes
    
        // inbound request endpoint
        app
        .route("/inbound/sms")
        .post(SMSList.InboundSMS)
    
        // outbound request endpoint
        app
        .route("/outbound/sms")
        .post(SMSList.OutboundSMS, limit)
    
        // default response
        app
        .use(SMSList.defaultResponse)
    };