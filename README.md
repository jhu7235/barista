# barista

Barista-matic Programming Assignment

##PROBLEM DESCRIPTION:
Your task is to create a simulator of an automatic coffee dispensing machine, called the Baristamatic.
The machine maintains an inventory of drink ingredients, and is able to dispense a fixed set of
possible drinks by combining these ingredients in different amounts. The cost of a drink is determined
by its component ingredients.
Upon startup, the Barista-matic should display a list of its current inventory, followed by a menu to
allow the user to select a drink. As drinks are dispensed, the inventory should be updated. Only
drinks for which there is sufficient inventory can be dispensed.
The specified input and output formats for the Barista-matic must be followed exactly. At the end of
these instructions, you will find examples of some input/output scenarios.

Your Barista-matic machine should be capable of dispensing the following drinks:
	Coffee 3 units of coffee, 1 unit of sugar, 1 unit of cream
	Decaf Coffee 3 units of Decaf Coffee, 1 unit of sugar, 1 unit of cream
	Caffe Latte 2 units of espresso, 1 unit of steamed milk
	Caffe Americano 3 units of espresso
	Caffe Mocha 1 units of Espresso, 1 unit of cocoa, 1 unit of steamed milk, 1 unit of whipped cream
	Cappuccino 2 units of Espresso, 1 unit of steamed milk, 1 unit of foamed milk

Per-unit ingredient costs are as follows:
	Coffee $0.75
	Decaf Coffee $0.75
	Sugar $0.25
	Cream $0.25
	Steamed Milk $0.35
	Foamed Milk $0.35
	Espresso $1.10
	Cocoa $0.90
	Whipped Cream $1.00

Initially the Barista-matic should contain 10 units of all ingredients, and restocking the machine
should restore each ingredient to a maximum of 10 units.

##INPUT FORMAT:
Your solution should read from the standard input stream, one command per line. No prompts or
other extraneous user messages should be displayed. Blank input lines should be ignored.
Each valid command consists of a single character, as follows:
	'R' or 'r' - restock the inventory and redisplay the menu
	'Q' or 'q' - quit the application
	[1-6] - order the drink with the corresponding number in the menu