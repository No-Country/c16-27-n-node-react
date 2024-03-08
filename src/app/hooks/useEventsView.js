// useEventData.js
import { useEffect, useState } from 'react';

export function useEventData(eventId) {
  const [eventData, setEventData] = useState(null);
  const [creatorUserData, setCreatorUserData] = useState(null);
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    async function fetchEventData() {
      try {
        const response = await fetch(
          `http://localhost:4000/api/events/${eventId}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch event data');
        }
        const data = await response.json();
        setEventData(data);

        // Fetch creator user data
        const creatorResponse = await fetch(
          `http://localhost:4000/api/user/${data.creatorUserEmail}`
        );
        if (!creatorResponse.ok) {
          throw new Error('Failed to fetch creator user data');
        }
        const creatorUserData = await creatorResponse.json();
        setCreatorUserData(creatorUserData);

        // Fetch attendees data
        const attendeesData = await Promise.all(
          data.attendees.map(async (attendeeEmail) => {
            const attendeeResponse = await fetch(
              `http://localhost:4000/api/user/${attendeeEmail}`
            );
            if (!attendeeResponse.ok) {
              throw new Error(
                `Failed to fetch attendee data for ${attendeeEmail}`
              );
            }
            return await attendeeResponse.json();
          })
        );
        setAttendees(attendeesData);
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    }

    if (eventId) {
      fetchEventData();
    }
  }, [eventId]);

  return { eventData, creatorUserData, attendees };
}
