const router = require('express').Router()
const billingCycleController = require('../controllers/billingCycleController')

router.post("/billingCycle", billingCycleController.register)
router.get("/billingCycle", billingCycleController.getAll)
router.get("/billingCycle/count", billingCycleController.countBillingCycles)
router.get("/billingCycle/summary", billingCycleController.summaryBillingCycles)
router.get("/billingCycle/:id", billingCycleController.getById)
router.patch("/billingCycle/:id", billingCycleController.edit)
router.delete("/billingCycle/:id", billingCycleController.delete)

module.exports = router;