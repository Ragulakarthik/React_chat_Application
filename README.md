# React Chat Application 💬

This project is a React-based chat application with functionalities that include a login page, question listings, and a chat interface where users can send and receive messages. It is designed to provide a seamless user experience with a simple and clean UI, and it supports interactions such as validating login credentials, navigating between pages, and communicating through a messaging system.

Demo Link : https://chat-application-5ph6.onrender.com

## Demo Pics
![image](https://github.com/user-attachments/assets/38700ab9-b60b-4f0d-8d57-ecc84d7d8c91)
![image](https://github.com/user-attachments/assets/3a5160b5-3326-4775-90db-68b1d6bb1c9d)
![image](https://github.com/user-attachments/assets/754989bd-fe87-4f7c-a982-8bc60c370caa)
![image](https://github.com/user-attachments/assets/212efb06-12ff-4f8c-8fb4-5b7691982c3e)
![image](https://github.com/user-attachments/assets/d86588ab-c283-424d-94e5-9af78410b7f7)




## Components 🧩

### 1. **Login Component (`Login.js`)** 🔑

The **Login** component serves as the entry point for users to log into the app. It includes a username and password input form, along with client-side validation and password visibility toggle.

#### Features:
- **Username and Password Inputs**: Users input their username and password to authenticate. 📝
- **Password Visibility Toggle**: Users can toggle password visibility by clicking on the eye icon 👀.
- **Form Validation**: The form validates both username and password:
  - **Username**: Must be alphabetic and cannot be empty. 📛
  - **Password**: Must be at least 8 characters long and contain a mix of letters, numbers, and special characters. 🔐
- **On Successful Login**: Once the form is successfully validated, the `onLoginSuccess` function is triggered to proceed to the next page. 🎉

#### Dependencies:
- **React Icons** for the password visibility icon (`FaEye`, `FaEyeSlash`). 🔧

---

### 2. **Questions Component (`Questions.js`)** ❓

The **Questions** component displays a list of questions, each with a summary of how many friends have answered it and a set of profile pictures for those friends. It allows users to click on a question to navigate to the chat interface for that specific question.

#### Features:
- **List of Questions**: A set of predefined questions, each with a title and the number of friends who have answered. 📝
- **Friend Logos**: Displays small profile pictures of friends who have answered the question. 👥
- **Navigation to Chat Screen**: When a user clicks on a question, it redirects them to the `ChatScreen` page with that question's details. 🚪

#### Dependencies:
- **React Router** for navigation (`useNavigate`). 🔄

---

### 3. **ChatScreen Component (`ChatScreen.js`)** 🗨️

The **ChatScreen** component is the page where users can communicate with the bot or their friends. The page displays the selected question and a messaging interface for the user to type and send messages.

#### Features:
- **Display Question**: Displays the question that the user selected in the previous component (`Questions`). ❓
- **Chat Interface**: A list of messages is displayed, alternating between the user's messages and the bot's responses. 💬
- **Send Messages**: Users can send messages by typing into a text input field. The message is added to the chat, and the input field is cleared. ✍️
- **Bot Message**: A default bot message is shown when the chat screen is first loaded, indicating that the answer is from a bot. 🤖
- **Navigation Back to Questions**: Users can navigate back to the list of questions using an arrow button. ⬅️

#### Dependencies:
- **React Router** for accessing the state passed from the `Questions` component (`useLocation`). 🔄
- **SVG Icons** for the send button and the back navigation. 🎨


# Application Setup and Run Instructions

## Prerequisites

Make sure you have the following installed on your machine:
- Git
- Node.js and npm (Node Package Manager)

## Steps to Run the Application

1. Open **Git Bash** or your preferred terminal.
2. Clone the repository:

   git clone {url}
   
3. Navigate to the project directory:

   cd {project-directory}

5. Install the required dependencies:

   npm install

5. Start the application:

   npm start

Make sure to replace `{url}` with the actual repository URL and `{project-directory}` with the directory name of your project, if necessary.
