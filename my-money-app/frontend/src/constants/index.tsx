export const URL = "http://localhost:3003/api"

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
    BILLING_CYCLES_FETCHED: 'BILLING_CYCLES_FETCHED'
}