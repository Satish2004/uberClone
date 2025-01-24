### **Backend Development (Server-side)**
1. **Server Setup:**
   - `server.js` is the entry point defined in `package.json` as `"main": "server.js"`.
   - Installed dependencies: `express`, `dotenv`, and `cors` (for handling cross-origin requests).

2. **User Authentication:**
   - Created a user model using Mongoose.
   - Implemented password hashing using `bcrypt`.
   - Used `JWT` for token generation and validation.
   - Routes:
     - **Register:** Validates and stores new user data.
     - **Login:** Compares hashed passwords and generates a token upon success.
     - **Logout:** Clears the token or blacklists it.

3. **Captain Module:**
   - Created a captain schema with details like vehicle color, capacity, etc.
   - Similar authentication logic as users (e.g., hashed passwords, token management).
   - Added specific routes for captain registration, login, and logout.
   - Middleware handles route protection and token validation.

4. **Middleware & Services:**
   - Middleware for authentication (`auth.middleware.js`).
   - Services interact with the database for clean code organization.

5. **Advanced Features:**
   - **Token Blacklisting:** Tokens have a TTL (e.g., 24 hours), automatically removed after expiry.
   - Cookies are used for storing tokens, supporting both header-based and cookie-based auth.

---

### **Frontend Development (React)**
1. **Setup and Routing:**
   - Used `react-router-dom` for navigation.
   - Wrapping `<App />` in `<BrowserRouter>` and context providers in `main.jsx`.

2. **User and Captain Features:**
   - Login and signup pages for users and captains.
   - Implemented two-way binding using `useState` for form handling.
   - Axios is used to send data from the frontend to the backend.

3. **Context API:**
   - Used context to centralize state management, reducing prop-drilling issues.
   - Example: `UserContext` and `CaptainContext`.

4. **Integration:**
   - Successfully integrated backend endpoints (user signup, login, and logout).
   - Token management ensures secure redirection based on login state.

5. **UI Enhancements:**
   - Styled buttons and forms using Tailwind CSS classes.
   - Added token-based redirects for better navigation flow (e.g., logout redirects to the login page).

---

### **Challenges Encountered & Resolutions**
1. **Axios Errors:**
   - Resolved by ensuring proper validation rules (e.g., minimum character lengths for fields).
   - Fixed server-client communication issues by verifying Axios configuration and backend responses.

2. **Token Handling:**
   - Used cookies and headers for secure token management.
   - Implemented token expiry and logout logic effectively.

3. **Captain Module:**
   - Similar to user features but faced issues with local server (likely related to port conflicts or incorrect routing).

---

### **Next Steps**
1. **Frontend Enhancements:**
   - Improve UI/UX for waiting screens (e.g., "Waiting for Driver" and "Riding") with better layouts and images.

2. **Debugging & Testing:**
   - Resolve network and localhost issues for captain features.
   - Test the entire flow (signup, login, logout) for both users and captains.

3. **Deployment:**
   - Prepare for deployment by ensuring environment variables and configurations are ready for production.

    

 

 
