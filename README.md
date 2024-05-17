User Management System

Overview
The User Management System is a web application designed to manage user accounts and access levels. Users can view, add, edit, and delete user details including their names, email addresses, and departments.

Features
View Users: Displays a list of users with their details including ID, name, email, and department.
Add User: Allows adding a new user to the system.
Edit User: Enables editing the details of an existing user.
Delete User: Facilitates the deletion of a user from the system.
Pagination: Supports pagination to navigate through the user list.
Responsive Design: Adjusts layout for different screen sizes.
Technologies Used
Frontend:

React
Chakra UI
Axios for API requests
Yup for validation

Backend:
JSON Server for mock API (if used for development)

Setup and Installation

Clone the repository:

git clone [https://github.com/yourusername/user-management-system.git](https://github.com/RiiXXD/AJACKUS.git)
cd users

Install dependencies:

npm i
      
Run the application:

npm run start

API Setup:

Ensure the backend server (or JSON Server) is running if the API is not part of this repository.
Update the BASE_URL in your request files to match the backend server URL.


Component Structure
AJACKUS-user/
├── public/
│   └── (Public files such as index.html, favicon, etc.)
├── src/
│   ├── components/
│   │   ├── Display.jsx
│   │   ├── Form.jsx
│   │   ├── Form.module.css
│   │   ├── Overlay.jsx
│   │   └── Pagination.jsx
│   ├── App.css
│   ├── App.js
│   ├── requests.js
│   ├── index.css
│   └── index.js


components/: Directory for all React components.
Display.jsx: Component responsible for displaying user details.
Form.jsx: Component for user form, used for adding and editing users.
Form.module.css: CSS module for styling the form component.
Overlay.jsx: Component for displaying overlay messages or modals.
Pagination.jsx: Component for handling pagination of user data.



How to Use
Viewing Users
Upon opening the application, you will see a list of users displayed in a table format. Each row contains the user's ID, name, email, and department.

Adding a User
Click on the + Add User button.
Fill in the user details in the form that appears.
Click on the Add User button to save the new user.
Editing a User
Click on the edit icon next to the user you want to edit.
Modify the user details in the form that appears.
Click on the Edit User button to save the changes.
Deleting a User
Click on the delete icon next to the user you want to delete.
Pagination
Use the pagination controls at the bottom of the user list to navigate through different pages.
Change the number of rows displayed per page using the dropdown.
Rows per page defines the limit.

Validation
Form validation is handled using Yup. The following validations are in place:

Name: Required field.
Email: Must be a valid email format and required.
Department: Required field.

Contributing
Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a Pull Request.

Acknowledgements
Thanks to AJACKUS Company for this assignment and the opportunity to work on this project.

License
This project is licensed under the MIT License.
