const express = require('express')
const router = express.Router()


router.post("/basic-details-handler", function (req, res) {

if (req.session.data['summary'] = "true") {
res.redirect('new-campaign-set-up/summary-section-1')
}
else {
  res.redirect('new-campaign-set-up/job-information')

}
})

// router.post("/job-information-handler", function (req, res) {
//   var checked = req.session.data['answers-checked']
//
//   if (checked != "true") {
//     res.redirect('new-campaign-set-up/locations')
//   }
//   else {
//     res.redirect('new-campaign-set-up/summary-section-1')
//   }
//   })







router.post("/submit", function (req, res) {
  var reserve = req.session.data['reserve']
  if (reserve == "yes") {
    res.redirect('new-campaign-set-up/reserve-candidates')
  } else {
    res.redirect('new-campaign-set-up/summary-section-6')
  }
})

router.post("/approval-altergo", function (req, res) {
  var approved = req.session.data['approval-status']
  if (approved == "Yes - approved")  {
    res.redirect('new-campaign-set-up/approval-upload')
  } else {
    res.redirect('new-campaign-set-up/reserve-list')
  }
})


router.post("/templates-altergo", function (req, res) {
  var template = req.session.data['template']

  if (template == "basic-details-progress") {
    res.redirect('task-list-new-campaign')

  } else {
    res.redirect('task-list')
  }

})


router.post("/locations-handler", function (req, res){
  var remote = req.session.data['uk']
  if (remote == "Remote") {
    res.redirect('new-campaign-set-up/contract-details')
  } else {
    res.redirect('new-campaign-set-up/locations-2')
  }
})


module.exports = router
