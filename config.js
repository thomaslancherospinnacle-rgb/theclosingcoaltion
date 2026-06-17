/**
 * CONFIG.JS - Central Configuration File
 */

// Google Apps Script: Applicants/Auth Database
const APPDB = "https://script.google.com/macros/s/AKfycbxBmZef_qgpLsWsuDH03ivr0vvtsRMQvkbKGTuf5EWIn1Ntd31Pr-qywo7Q6iUF2FS1/exec";

// Cloudflare Worker - ALL API CALLS GO THROUGH HERE
const CFWORKER = "https://closing-coalition-api.thomaslancheros06.workers.dev";

// These routes go THROUGH the Cloudflare Worker (NOT directly to Google Scripts!)
const LEADSDB = CFWORKER + "/leadsdb";
const REFDB = CFWORKER + "/refdb";
const AUTH = CFWORKER;

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CFWORKER,
        APPDB,
        REFDB,
        LEADSDB,
        AUTH
    };
}
