import React from 'react';
import Eventcard from '../../components/Cards/Eventcard'; // Import the Eventcard component
import cd1 from "../../images/webinarpic.avif";

export default function App() {
  const eventsData = [
    {
        imageUrl: cd1,
        title: "Child Rights Workshop",
        description: "Join us for an informative workshop on child rights and learn about the importance of protecting children's rights in our society. This workshop will cover topics such as child protection laws, education, and the role of communities in ensuring child well-being.",
        timing: "9:00 AM - 12:00 PM",
        date: "5",
        month: "April",
    },
    {
        imageUrl: cd1,
        title: "Children's Education Fundraiser",
        description: "Help support underprivileged children's education by participating in our fundraising event. Your contribution can make a significant impact. This fundraiser aims to provide scholarships, school supplies, and educational opportunities to disadvantaged children.",
        timing: "10:00 AM - 3:00 PM",
        date: "15",
        month: "June",
    },
    {
        imageUrl: cd1,
        title: "Child Health Awareness Campaign",
        description: "Join our campaign to raise awareness about child health issues and promote access to healthcare services for all children. We will organize health camps, seminars, and workshops to address nutrition, immunization, and child well-being.",
        timing: "2:00 PM - 5:00 PM",
        date: "20",
        month: "August",
    },
    {
        imageUrl: cd1,
        title: "Child Rights Conference",
        description: "Participate in a comprehensive conference discussing child rights issues, policies, and initiatives. Together, we can work towards a better future for children. This conference will feature keynote speakers, panel discussions, and opportunities for networking and collaboration.",
        timing: "9:30 AM - 4:30 PM",
        date: "10",
        month: "December",
    },
];

    return (
        <div>
            <h1>Child Rights Events</h1>
            <div className="events-container">
                {eventsData.map((event, index) => (
                    <Eventcard key={index} {...event} />
                ))}
            </div>
        </div>
    );
}
