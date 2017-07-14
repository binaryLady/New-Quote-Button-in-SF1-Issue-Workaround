# SFDC
We recently went live with a team on Lightning only. Everything seemed to be going okay until the New Quote button disappeared suddenly from the quote related list on Opportunity on SF1. The button was there in LEX (Lightning Experience) but on mobile devices it was gone, just gone. And the worst part was it had been there the week before. I got on the SFDC help desk red phone and once I had my case elevated to tier 2, I had a very helpful rep research the issue for me. Come to find out SFDC R&D had removed the button from SF1 without notice because of some bugs they were seeing. This is a workaround for this issue.

Note, this workaround is designed for Lightning and SF1. If you are using classic then you would be better off going the route of a Visualforce page. Our users are going live on Lightning and are heavy mobile users so this functionality is critical for them. Enough talking and let’s get to the code…

This is a Lightning Component Action which means that once you have created the component you will need to create a Lightning Action that will use the code add the action to your page layout.
