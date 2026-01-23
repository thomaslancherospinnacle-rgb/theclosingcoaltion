/**
 * CONFIG.JS - Central Configuration File
 * Update all Google Apps Script deployment URLs here
 */

// Cloudflare Worker for Authentication
const CFWORKER = "https://closing-coalition-api.thomaslancheros06.workers.dev/";

// Google Apps Script: Applicants Database
const APPDB = "https://script.google.com/macros/s/AKfycbxcoHmU_iqzvcmawu6kBuN0_Tmb4gWGk8v7MaHxzKzn1FhfVA_MDiqBU1otwgxCL9NM/exec";

// Google Apps Script: Referral Network Database
const REFDB = "https://script.google.com/macros/s/AKfycbxpMNUsx8bCt2ApEyAC0ywpc-iuOLJAZhsEEuIQ59rsYniJJiyrMp5ECGQ9QD_sjwHv-Q/exec";

// Google Apps Script: Leads Database & Caller Permissions
const LEADSDB = "https://script.google.com/macros/s/AKfycby3ZjT0h5cnmhts-3vBdJ2uPouTKv5k4Qu1CrYHxCObumU_gc2Huvw7ga0kynEbaYBftA/exec";
// Authentication Script (if separate)
const AUTH = CFWORKER; // or separate auth URL if different

/**
 * DEPLOYMENT INSTRUCTIONS:
 * 
 * 1. Deploy REFDB (ReferralManager_v2.2.gs):
 *    - Open your Referrals Google Sheet
 *    - Extensions → Apps Script
 *    - Paste ReferralManager_v2.2.gs code
 *    - Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Copy URL and paste as REFDB above
 * 
 * 2. Deploy LEADSDB (LEADSDB.gs):
 *    - Create NEW Google Sheet called "Lead Database"
 *    - Extensions → Apps Script
 *    - Paste LEADSDB.gs code
 *    - Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Copy URL and paste as LEADSDB above
 *    - IMPORTANT: Run initializeSampleData() once to create sample CSV tab
 * 
 * 3. Create CSV Tabs in LEADSDB Sheet:
 *    - In your "Lead Database" Google Sheet
 *    - Create tabs named: AGY981, AHD1709, JM810, REF989, XQF482, YDH1853
 *    - Each tab should have headers: Name | Phone | Status | Outcome | LastUpdated
 *    - Import your CSV data into these tabs
 * 
 * 4. Update this config.js file with all URLs
 * 
 * 5. Upload to your server/website:
 *    - admin.html (with Caller tab integrated)
 *    - refferal.html (updated with outcome system)
 *    - leadbase.html (updated with caller features)
 *    - config.js (this file with all URLs)
 */

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
