This assignment had given by Migracode in bootcamp in 2023. I have added it as my repo today.


Installation
Follow the instructions to fork & clone the GitHub repo
Install the dependencies by running npm install
Launch the server using npm start
It should automatically open http://localhost:3000/ in your browser
Exercises
Lesson 1
1. Extract the search button in its own component
Instructions: Extract the search <button> from the src/Search.js file to be its own separate component. You can name it SearchButton. Import and use this new component in src/Search.js.

Test: The search button should still render on the page.

2. Extract the header in its own component
Instructions: Extract the <header> from the src/App.js file to be its own separate component called Heading. Make sure that you import and render the <Heading /> component within src/App.js. In the Heading component, render the hotel's logo in an <img> (you can use https://image.flaticon.com/icons/svg/139/139899.svg or find your own image URL). You can adjust the CSS by editing src/App.css to make your Heading looks better if necessary.

Test: The header should be displayed with a logo on the page.

3. Create and use a new component to show info cards
Instructions: In src/App.js, above the <Bookings /> component add a new component called TouristInfoCards which shows 3 cards. A card is a common user interface pattern with an image at the top and some related text underneath. The cards must link to peoplemakeglasgow.com, visitmanchester.com and visitlondon.com. The cards should contain the name of the city and an image of the city. Here is an example of what an info card should look like:

Info Card

Hint: Use the same className as the example below to benefit from Bootstrap library which is already imported for you in the project. Use the JSX code below as an example of one card (note that in JSX, you'll need to use className instead of class):

<div className="card">
	<img src="..." className="card-img-top" />
	<div className="card-body">
		<a href="#" className="btn btn-primary">Go somewhere</a>
	</div>
</div>
Test: 3 info cards should be displayed on the page for each city (Glasgow, Manchester, London). Each card should link to the correct website.

4. Create a Footer component
Instructions: Create a <Footer /> component which should be rendered at the bottom of the page. Pass the following array as a prop to this component: ["123 Fake Street, London, E1 4UD", "hello@fakehotel.com", "0123 456789"]. Inside the component, use the data you passed as a prop to render a <ul> list with each item of the array displayed as a <li>.

Hint: The .map() method will by useful.

Test: The footer should render at the bottom of the page with each address property displayed as a list item.

5. Create a table to show hotel bookings
Instructions: Create a <SearchResults /> component that shows hotel bookings in a <table> element. Each booking will have an id, title, first name, surname, email, room id, check in date and check out date. You can make up data in the <SearchResults /> component to show in the table. Then show <SearchResults /> component within the <Bookings /> component that is provided. Be sure to split out your components into small well-named components, similar to the method used in exercise 1.

Hint: You will find some useful <table> examples in the Bootstrap documentation for tables.

Test: A table should render with a column for each booking attribute. The table can show more than one booking. The bookings that are displayed can be made up and hardcoded for now.

6. Show more bookings in the table
Instructions: Instead of using your hard-coded data in the <SearchResults /> component, load data from the src/data/fakeBookings.json file in the <Bookings /> component and pass it as a prop to <SearchResults />. All the bookings in src/data/fakeBookings.json should now be displayed in your table.

Hint: Look in the <Bookings /> component for how to import data from a JSON file.

Test: All the bookings in the file src/data/fakeBookings.json should be displayed in your table.

7. Calculate and show the number of nights for each booking
Instructions: Add another column to your <SearchResults /> table which shows the number of nights a guest is staying.

Hint: Try installing the moment.js library (you'll need to install it with npm install moment --save) and using the .diff() method to compare dates.

Test: Each booking in your table should show the number of nights in a separate column. For example, Mr John Doe has a booking for 2 nights.

Lesson 2
8. Render the Restaurant component
Instructions: Within the src/App.js file, render the <Restaurant /> component (that is provided for you in src/Restaurant.js) underneath the <Bookings /> component.

Test: The restaurant orders should render on the page.

9. Preparing to add more pizzas
Instructions: At the moment, the number of pizzas a guest can order is static and set to 0, even if they click on the 'Add' button. We will change that in the following to let a guest add more pizzas to their order. First, declare a new state variable orders along with the function to set the orders state setOrders. The initial value of the orders state should be 0. Use the new orders variable instead of the pizzas variable (that you can now delete).

Hint: You need to use the React function useState to create a state variable. Remember to import the function at the top with import React, {useState} from "react";.

Test: Verify the number of ordered pizzas it still 0 on the screen.

10. Add more pizzas
Instructions: In the <Restaurant /> component, create a new function named orderOne. The orderOne function doesn't take any parameters and should use the setOrders function to increment the orders state variable by 1. Then, add a onClick handler to the Add <button> that calls the orderOne function when it's being clicked.

Test: Try to click on the Add button a few times and verify that the number of pizzas increases accordingly.

11. Extract the Add button to its own component
Instructions: Extract the <button> currently in the <Restaurant /> component to a new component named RestaurantButton. Pass the orderOne function as a prop to the <RestaurantButton /> component and use this prop in the onClick handler.

Test: Clicking the button should still increment the number of pizzas.

12. Extract pizza order to its own Order component
Instructions: Extract the <li> containing "Pizzas" from the <Restaurant /> component to a new component named Order. Also, move the declaration of the orders state and the orderOne function from the <Restaurant /> component to the new <Order /> component. Use the <Order /> component in the <ul> list of the <Restaurant /> component.

Test: Make sure the pizza order is still rendered on the page and that clicking on the "Add" button still increments the number of orders.

13. Render more orders
Instructions: Pass a new prop named orderType to the <Order /> component with the value "Pizzas". Then render the orderType prop instead of "Pizzas" in the <Order /> component. Make sure that "Pizzas" is still displayed on the screen. In the <ul> list of the <Restaurant /> component, render 2 others <Order /> components but this time pass different values for the orderType prop: "Salads" and "Chocolate cake".

Test: For each order, the number of items can be incremented independently. Verify that you are able to explain what is happening.

14. Passing bookings from a state variable
Instructions: In the <Bookings /> component, declare a new state bookings with the corresponding setter function setBookings to hold the FakeBookings data. Instead of passing FakeBookings directly to the <SearchResults /> component, pass the new bookings state variable.

Hint: The new bookings state should be initialised with the FakeBookings variable.

Test: Check that the bookings are still rendered correctly in the page.

15. Highlight booking row when clicked
Instructions: Within the <SearchResults /> component or its child components, add an onClick handler to each row in the table (hint: on the <tr> element). When clicked, the row is "selected" and highlighted with a different colour. When clicked again, the row is unselected and the coloured highlighting is removed.

Hint: Use a new state variable for each row to record if the row is selected or not, and use this value to set a class to the className prop of the row.

Test: Verify that each row of your table can be highlighted (on and off) independently when being clicked.
