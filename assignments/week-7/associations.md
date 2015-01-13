# Associations Lab

1. Create a new rails app called `associations_practice`
2. Create three models: `User`, `Magazine`, and `Subscription`
3. The user and magazine models do not need any additional attributes; the subscription model should have a magazine_id and a user_id; don't forget to run your migrations!
4. Set up the following associations:

	4.1. User has many subscriptions
	4.2. Magazine has many subscriptions
	4.3. Subscription belongs to user
	4.4. Subscription belongs to magazine
	4.5. Magazine has many subscribers through subscriptions
	4.6. User has many magazines through subscriptions
5. Create some seed data and test the associations in your console

No views or controllers needed!
