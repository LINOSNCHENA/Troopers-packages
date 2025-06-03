
// ==================================================================================

export const MAX_ITEMS_PER_PAGE = 20
export const DATE_FORMAT = 'YYYY-MM-DD'
export const TIME_FORMAT = 'HH:mm:ss'
export const CURRENCY = 'USD'
export const DEFAULT_LANGUAGE = 'en'
export const RETRY_LIMIT = 3
export const FILE_UPLOAD_LIMIT_MB = 10
export const SESSION_TIMEOUT_MINUTES = 30
export const TOKEN_STORAGE_KEY = 'auth_token'
export const REFRESH_TOKEN_KEY = 'refresh_token'
export const LOG_LEVEL = 'debug'
export const SUPPORTED_LANGUAGES = ['en', 'es', 'fr']
export const CONTACT_EMAIL = 'support@example.com'
export const NOTIFICATION_TYPES = ['success', 'error', 'info', 'warning']
export const FOOTER_TEXT = '© 2025 Troopers Bank. All rights reserved.'

export const ISTATUS_OPEN = 'Open';
export const ISTATUS_CLOSED = 'Closed';
export const ICOMPLETED_YES = 'Passed';
export const ICOMPLETED_NO = 'Failed';

// ============================================================================= //

export const compLogo = "/Logo/1.png";
export const compName = 'Nexus Digital Lending Ltd'
export const allRights = "© 2025 Nexus Digital (Nexus) Ltd. All rights reserved"
export const loanStatus = (['false', 'true']);
export const lnvestorStatus = (['Investor-Fund', 'Profit_Fund']);
export const formErrors = { homefound: false, };
export const homeFoundOptions = [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }];
export const fAddress = "Floor 11 room 12, Lusaka | Mob: +260-761278111  |";
export const footnote3 = "TROOPERS MONEY LENDERS LTD | Cairo Rd Indeco House," + fAddress;
export const compMobile = '+26-077645353'
export const compAddress = 'Cairo Road, Indeco House, Floor 11-12, Lusaka City, Zambia'
export const compAddressTiny = 'Cairo Rd, Indeco House,11-12, Lusaka'
export const compEmail = "directorate.troopers@gmail.com";
export const compeMailMobile = "Phone: +260-761278111  |   Email: directorate.troopers@gmail.com";

export const compSalary = 7500;
export const compMarkUp = 21021;
export const compPenalty = 0.012; // 1.2%
export const compCEO = 'Marvin Nchena';
export const compStartDate = new Date("2023-03-01");
export const compDated = new Date().toLocaleDateString();
export const compMonthLong = new Date().toLocaleString('en-ZM', { month: 'long' });
export const compMonthShort = new Date().toLocaleString('en-ZM', { month: 'short' });
export const IRateX = [0.0, 0.36, 0.42, 0.48, 0.54, 0.6, 0.66, 0.72, 0.78];
export const filteredDays = (['all', 10, 20, 30, 45, 50, 60, 70, 90, 120, 600, 999]);
export const compMonthWhole = new Date().toLocaleDateString('en-ZM', {
  day: '2-digit', month: 'short', year: 'numeric',
});
export const companyAddress = [
  "Troopers Money Lenders Limited, Indeco House", "11th Floor Room 11-12, Cairo Road, Lusaka, Zambia.", "Mobile : " + compMobile];

// ============================================================================= //

export const logoHeight = 35;
export const logoWidth = 70;
export const penaltyFees = 0.0120
export const today = new Date();

export const originalWidth = 210;
export const originalHeight = 297;
export const increase1Factor = 1.0; // 1.00,
export const increase2Factor = 1.5; // 1.50,
export const increase3Factor = 1.870; // 1.88
export const newWidth = originalWidth * increase1Factor;
export const newHeight = originalHeight * increase1Factor;
export const widthMiddle = originalWidth * increase2Factor;
export const heightMiddle = originalHeight * increase2Factor;
export const widthLarge = originalWidth * increase3Factor;
export const heightLarge = originalHeight * increase3Factor;


// =================================================================================

export const TABLE_COLORS = { style: 'background: #CFD8DC; color: black;' }
export const TABLE_DETAILS = { primary: '#E0F7FA', secondary: '#B2EBF2', tertiary: '#80DEEA', quaternary: '#4DD0E1', quinary: '#26C6DA' };

