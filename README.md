# React Chat Application 💬

This project is a React-based chat application with functionalities that include a login page, question listings, and a chat interface where users can send and receive messages. It is designed to provide a seamless user experience with a simple and clean UI, and it supports interactions such as validating login credentials, navigating between pages, and communicating through a messaging system.

## Demo Pics
![image](https://github.com/user-attachments/assets/ae6f1885-2829-43f7-883e-d60aa12f6f89)
![image](https://github.com/user-attachments/assets/ab8032bf-ef03-4a76-bc06-d0b7e21078d2)
![image](https://github.com/user-attachments/assets/dff1db5a-625f-428b-a6c2-3128162ca95a)
![image](https://github.com/user-attachments/assets/bc68199a-1b44-4795-9e09-fb4e646e208f)
![image](https://github.com/user-attachments/assets/36f71f90-2e8c-43ad-b504-60be4abe3bf0)
![image](https://github.com/user-attachments/assets/3fef3d05-4cdf-49e5-94d4-b36e7ed2ea1b)
![image](https://github.com/user-attachments/assets/c8a3ac94-fb68-41a2-b9e0-a02bc5a68f96)
![image](https://github.com/user-attachments/assets/18df3629-3459-4040-869a-c81256c08588)

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
