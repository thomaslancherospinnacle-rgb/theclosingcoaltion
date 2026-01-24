/**
 * CONFIG.JS - Central Configuration File
 * Update all deployment URLs here after deploying scripts
 */

// Google Apps Script: Applicants Database
const APPDB = "https://script.google.com/macros/s/AKfycbwSqs-q-ZLMq_H4UAFxDJ9Enjbvw_2urr-7kTuop_6rbsU38hR-9-_mPizNXJFVYPcn/exec";

// Google Apps Script: Referral Network Database
const REFDB = "https://script.google.com/macros/s/AKfycbzuFjkPfGRiHFXs_nKioy27mEZLMMarVNUXfhcoBHsYj4rKCn8ncBkfuMyGI9aoOjTZFw/exec";

// Cloudflare Worker base URL
const CFWORKER = "https://closing-coalition-api.thomaslancheros06.workers.dev";

// Routes (automatically handled by Cloudflare Worker)
const LEADSDB = CFWORKER + "/leadsdb";
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
