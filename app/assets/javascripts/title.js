var title = [
"Application operations engineer",
"Business analyst",
"Business relationship manager",
"Change and release manager",
"Command and control centre manager",
"Content designer",
"Content strategist",
  "Data analyst",
  "Data architect",
  "Data engineer",
    "Data scientist",
    "Delivery manager",
    "Development operations (DevOps) engineer",
  "End user computing engineer",
  "Frontend developer",
  "Graphic designer",
    "Incident manager",
"Infrastructure operations engineer",
"Interaction designer",
  "IT service manager",
  "Network architect",
  "Performance analyst",
  "Problem manager",
  "Product manager",
  "Programme delivery manager",
  "Quality assurance testing (QAT) analyst",
  "Security architect",
  "Service designer",
  "Service desk manager",
  "Service owner",
  "Service transition manager",
  "Software developer",
  "Specialist infrastructure engineer",
  "Technical architect",
  "Technical specialist architect",
  "Technical writer",
  "Test engineer",
  "Test manager",
  "User researcher"
  ]
  var element = document.querySelector('#title')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: title})
  