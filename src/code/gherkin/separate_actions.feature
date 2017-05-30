When I login with "username"
Then the page title should be "Welcome"

When I click "My Account"
Then I should see "My name"

When I press "Edit"
And I fill in "Name" with "Another name"
And I press "Save"
Then I should see "Changes saved succesfully"
And I should see "Another name"