# Features

--> Create, Read, Update, Delete (CRUD) subscriptions

--> Automated email reminders for upcoming renewals

--> Workflow automation to trigger reminders at custom intervals (7, 5, 2, 1 days before renewal)

--> Authentication & Authorization using JWT (optional for future expansion)

--> Security features including rate limiting and bot detection with Arcjet

--> Global error handling and input validation

# API ENDPOINTS

| Method | Endpoint                 | Description                 |
| ------ | ------------------------ | --------------------------- |
| GET    | `/api/subscriptions`     | Get all subscriptions       |
| POST   | `/api/subscriptions`     | Create a new subscription   |
| PUT    | `/api/subscriptions/:id` | Update a subscription by ID |
| DELETE | `/api/subscriptions/:id` | Delete a subscription by ID |

# Example Request Body (POST/PUT)
{
  "name": "Netflix Premium",
  "user": "John Doe",
  "price": 15,
  "currency": "USD",
  "frequency": "Monthly",
  "renewalDate": "2025-09-30",
  "paymentMethod": "Credit Card"
}

# Setup Instructions
1. Clone the repository: git clone https://github.com/Prasantkhadka/subscription-tracker-api.git
cd subscription-tracker-api
2. Install dependencies: npm install
3. Create a .env file in the root directory:
  PORT=3002
  MONGO_URI=your_mongodb_connection_string
  EMAIL_USER=your_email@example.com
  EMAIL_PASS=your_email_password
  ARCJET_KEY=your_arcjet_key
4. Run the server in development mode: npm run dev
5. Test endpoints using Postman or cURL.

# What I Learned

--> RESTful API Development: Building endpoints for CRUD operations and handling HTTP requests properly.

--> Database Modeling with Mongoose: Creating schemas, validating ObjectIds, and performing queries.

--> Automated Email Reminders: Scheduling notifications using Upstash Workflows for subscription renewals.

--> Date & Time Handling: Using Day.js to calculate reminder intervals and format dates.

--> Error Handling & Validation: Returning meaningful responses with proper status codes.

--> Bot Detection & Rate Limiting: Integrating Arcjet to protect API endpoints.

--> Environment Variables: Keeping sensitive data secure using .env and .gitignore.

--> Workflow Automation: Triggering tasks based on business logic (e.g., reminders before renewal dates).


# Next Improvements

--> Add JWT-based authentication for user-specific subscriptions.

--> Add pagination, search, and filtering for subscriptions.

--> Implement unit and integration tests for API endpoints.

--> Add file upload support for subscription logos or receipts.

