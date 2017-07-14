# SFDC

Note, this workaround is designed for Lightning and SF1. If you are using classic then you would be better off going the route of a Visualforce page. Our users are going live on Lightning and are heavy mobile users so this functionality is critical for them. Enough talking and let’s get to the code…

This is a Lightning Component Action which means that once you have created the component you will need to create a Lightning Action that will use the code add the action to your page layout.

*Note that you will need to wire up your own field validations and setters.
