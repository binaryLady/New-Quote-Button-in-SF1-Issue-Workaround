({
    doInit : function(component, event, helper) {
		var today = new Date();
        component.set('v.today', today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
        // Prepare the action to load opportunity record
        var action = component.get("c.getOpportunity");
        action.setParams({"opportunityId": component.get("v.recordId")});

        // Configure response handler
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === "SUCCESS") {
                component.set("v.opportunity", response.getReturnValue());
                component.set("v.quote.Account","v.myQuoteName");
                component.set("v.quote.ContactId","v.myContact");
 
            } else {
                console.log('Problem getting opportunity, response state: ' + state);
            }
        });
        $A.enqueueAction(action);
    },

     setOutput : function(component, event, helper) {
    	var cmpMsg = component.find("msg");
    	$A.util.removeClass(cmpMsg, 'hide');
        var expdate = component.find("expdate").get("v.value");

        var oDate = component.find("oDate");
        oDate.set("v.value", expdate);

    },
    handleSaveQuote: function(component, event, helper) {
        if(helper.validateQuoteForm(component)) {
            // Prepare the action to create the new cquote
            var saveQuoteAction = component.get("c.saveQuoteWithOpportunity");
            saveQuoteAction.setParams({
                "quote": component.get("v.newQuote"),
                "opportunityId": component.get("v.recordId")
            });

            // Configure the response handler for the action
            saveQuoteAction.setCallback(this, function(response) {
                var state = response.getState();
                if(state === "SUCCESS") {

                    // Prepare a toast UI message
                    var resultsToast = $A.get("e.force:showToast");
                    resultsToast.setParams({
                        "title": "Quote Saved",
                        "message": "The new quote was created."
                    });

                    // Update the UI: close panel, show toast, refresh opportunity page
                    $A.get("e.force:closeQuickAction").fire();
                    resultsToast.fire();
                    $A.get("e.force:refreshView").fire();
                }
                else if (state === "ERROR") {
                    console.log('Problem saving quote, response state: ' + state);
                }
                else {
                    console.log('Unknown problem, response state: ' + state);
                }
            });

            // Send the request to create the new quote
            $A.enqueueAction(saveQuoteAction);
        }
        
    },

	handleCancel: function(component, event, helper) {
	    $A.get("e.force:closeQuickAction").fire();
    }
})
