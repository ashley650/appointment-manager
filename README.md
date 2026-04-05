# Appointment Management System Documentation

## Features
- Manage appointments efficiently.
- Notifications for upcoming appointments.
- User-friendly interface.
- Integration with calendar services.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ashley650/appointment-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd appointment-manager
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

## API Endpoints
- **GET /appointments** - Retrieve all appointments.
- **POST /appointments** - Create a new appointment.
- **PUT /appointments/:id** - Update an existing appointment.
- **DELETE /appointments/:id** - Delete an appointment.

## Services
- Email Notification Service: Sends reminders via email.
- Calendar Sync Service: Syncs appointments with Google Calendar.

## Database Models
- **Appointment**: Represents an appointment including details like date, time, and participants.
  - `id`: Unique identifier for the appointment.
  - `date`: The date of the appointment.
  - `time`: The time of the appointment.
  - `participants`: List of participants in the appointment.

## Configuration Instructions
1. Create a `.env` file in the root of the project.
2. Add the following configurations:
   ```plaintext
   DATABASE_URL=your_database_url
   EMAIL_SERVICE_API_KEY=your_email_service_api_key
   ```
3. Save the file and start the application using:
   ```bash
   npm start
   ```