"use strict";
// ==================================================================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.originalWidth = exports.today = exports.penaltyFees = exports.logoWidth = exports.logoHeight = exports.companyAddress = exports.compMonthWhole = exports.filteredDays = exports.IRateX = exports.compMonthShort = exports.compMonthLong = exports.compDated = exports.compStartDate = exports.compCEO = exports.compPenalty = exports.compMarkUp = exports.compSalary = exports.compeMailMobile = exports.compEmail = exports.compAddressTiny = exports.compAddress = exports.compMobile = exports.footnote3 = exports.fAddress = exports.homeFoundOptions = exports.formErrors = exports.lnvestorStatus = exports.loanStatus = exports.allRights = exports.compName = exports.compLogo = exports.ICOMPLETED_NO = exports.ICOMPLETED_YES = exports.ISTATUS_CLOSED = exports.ISTATUS_OPEN = exports.FOOTER_TEXT = exports.NOTIFICATION_TYPES = exports.CONTACT_EMAIL = exports.SUPPORTED_LANGUAGES = exports.LOG_LEVEL = exports.REFRESH_TOKEN_KEY = exports.TOKEN_STORAGE_KEY = exports.SESSION_TIMEOUT_MINUTES = exports.FILE_UPLOAD_LIMIT_MB = exports.RETRY_LIMIT = exports.DEFAULT_LANGUAGE = exports.CURRENCY = exports.TIME_FORMAT = exports.DATE_FORMAT = exports.MAX_ITEMS_PER_PAGE = void 0;
exports.TABLE_DETAILS = exports.TABLE_COLORS = exports.heightLarge = exports.widthLarge = exports.heightMiddle = exports.widthMiddle = exports.newHeight = exports.newWidth = exports.increase3Factor = exports.increase2Factor = exports.increase1Factor = exports.originalHeight = void 0;
exports.MAX_ITEMS_PER_PAGE = 20;
exports.DATE_FORMAT = 'YYYY-MM-DD';
exports.TIME_FORMAT = 'HH:mm:ss';
exports.CURRENCY = 'USD';
exports.DEFAULT_LANGUAGE = 'en';
exports.RETRY_LIMIT = 3;
exports.FILE_UPLOAD_LIMIT_MB = 10;
exports.SESSION_TIMEOUT_MINUTES = 30;
exports.TOKEN_STORAGE_KEY = 'auth_token';
exports.REFRESH_TOKEN_KEY = 'refresh_token';
exports.LOG_LEVEL = 'debug';
exports.SUPPORTED_LANGUAGES = ['en', 'es', 'fr'];
exports.CONTACT_EMAIL = 'support@example.com';
exports.NOTIFICATION_TYPES = ['success', 'error', 'info', 'warning'];
exports.FOOTER_TEXT = '© 2025 Troopers Bank. All rights reserved.';
exports.ISTATUS_OPEN = 'Open';
exports.ISTATUS_CLOSED = 'Closed';
exports.ICOMPLETED_YES = 'Passed';
exports.ICOMPLETED_NO = 'Failed';
// ============================================================================= //
exports.compLogo = "/Logo/1.png";
exports.compName = 'Nexus Digital Lending Ltd';
exports.allRights = "© 2025 Nexus Digital (Nexus) Ltd. All rights reserved";
exports.loanStatus = (['false', 'true']);
exports.lnvestorStatus = (['Investor-Fund', 'Profit_Fund']);
exports.formErrors = { homefound: false, };
exports.homeFoundOptions = [{ value: "Yes", label: "Yes" }, { value: "No", label: "No" }];
exports.fAddress = "Floor 11 room 12, Lusaka | Mob: +260-761278111  |";
exports.footnote3 = "TROOPERS MONEY LENDERS LTD | Cairo Rd Indeco House," + exports.fAddress;
exports.compMobile = '+26-077645353';
exports.compAddress = 'Cairo Road, Indeco House, Floor 11-12, Lusaka City, Zambia';
exports.compAddressTiny = 'Cairo Rd, Indeco House,11-12, Lusaka';
exports.compEmail = "directorate.troopers@gmail.com";
exports.compeMailMobile = "Phone: +260-761278111  |   Email: directorate.troopers@gmail.com";
exports.compSalary = 7500;
exports.compMarkUp = 21021;
exports.compPenalty = 0.012; // 1.2%
exports.compCEO = 'Marvin Nchena';
exports.compStartDate = new Date("2023-03-01");
exports.compDated = new Date().toLocaleDateString();
exports.compMonthLong = new Date().toLocaleString('en-ZM', { month: 'long' });
exports.compMonthShort = new Date().toLocaleString('en-ZM', { month: 'short' });
exports.IRateX = [0.0, 0.36, 0.42, 0.48, 0.54, 0.6, 0.66, 0.72, 0.78];
exports.filteredDays = (['all', 10, 20, 30, 45, 50, 60, 70, 90, 120, 600, 999]);
exports.compMonthWhole = new Date().toLocaleDateString('en-ZM', {
    day: '2-digit', month: 'short', year: 'numeric',
});
exports.companyAddress = [
    "Troopers Money Lenders Limited, Indeco House", "11th Floor Room 11-12, Cairo Road, Lusaka, Zambia.", "Mobile : " + exports.compMobile
];
// ============================================================================= //
exports.logoHeight = 35;
exports.logoWidth = 70;
exports.penaltyFees = 0.0120;
exports.today = new Date();
exports.originalWidth = 210;
exports.originalHeight = 297;
exports.increase1Factor = 1.0; // 1.00,
exports.increase2Factor = 1.5; // 1.50,
exports.increase3Factor = 1.870; // 1.88
exports.newWidth = exports.originalWidth * exports.increase1Factor;
exports.newHeight = exports.originalHeight * exports.increase1Factor;
exports.widthMiddle = exports.originalWidth * exports.increase2Factor;
exports.heightMiddle = exports.originalHeight * exports.increase2Factor;
exports.widthLarge = exports.originalWidth * exports.increase3Factor;
exports.heightLarge = exports.originalHeight * exports.increase3Factor;
// =================================================================================
exports.TABLE_COLORS = { style: 'background: #CFD8DC; color: black;' };
exports.TABLE_DETAILS = { primary: '#E0F7FA', secondary: '#B2EBF2', tertiary: '#80DEEA', quaternary: '#4DD0E1', quinary: '#26C6DA' };
