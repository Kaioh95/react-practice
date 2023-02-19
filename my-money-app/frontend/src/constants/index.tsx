const baseURL = process.env.REACT_APP_BACK_URL || "http://localhost:3003"
export const URL = `${baseURL}/api`
export const OAPI_URL = `${baseURL}/oapi`

export const initialState = {
    summary: {credit: 0, debt: 0}
}

export const dashboardActions = {
    SUMMARY_CHANGED: "SUMMARY_CHANGED",
}

export const tabActions={
    TAB_SELECTED: "TAB_SELECTED",
    TAB_SHOWED: "TAB_SHOWED"
}

export const billingCyclesActions={
    BILLING_CYCLES_FETCHED: 'BILLING_CYCLES_FETCHED',
    BC_UPDATE: 'BC_UPDATE'
}