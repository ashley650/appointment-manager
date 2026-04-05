const cron = require('node-cron');

// Function to send appointment reminders
function sendReminder(appointment) {
    // Logic to send reminder
    console.log(`Reminder for appointment: ${appointment}`);
}

// Schedule to send reminders 2 hours before the appointment
cron.schedule('0 */2 * * *', () => {
    // Logic to get appointments for reminders 2 hours before
    const appointments = []; // Replace with your logic to fetch appointments
    appointments.forEach(sendReminder);
});

// Schedule to send reminders the day before at 9 AM
cron.schedule('0 9 * * *', () => {
    // Logic to get appointments for reminders for the next day
    const appointments = []; // Replace with your logic to fetch appointments
    appointments.forEach(sendReminder);
});

module.exports = { scheduleReminderJobs };