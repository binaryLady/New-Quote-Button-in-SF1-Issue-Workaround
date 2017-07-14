({
    validateQuoteForm: function(component) {
        var validQuote = true;

        // Show error messages if required fields are blank
       // var allValid = component.find('quoteField').reduce(function (validFields, inputCmp) {
          //  inputCmp.showHelpMessageIfInvalid();
            //return validFields && inputCmp.get('v.validity').valid;
        //}, true);

       // if (allValid) {
        // Verify we have an opportunity to attach it to
        var opportunity = component.get("v.opportunity");
        if($A.util.isEmpty(opportunity)) {
            validQuote = false;
            console.log("Quick action context doesn't have a valid opportunity.");
        }

        return(validQuote);
	//}
    }
})
