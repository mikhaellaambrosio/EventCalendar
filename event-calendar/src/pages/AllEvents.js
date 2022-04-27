import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function AllEvents() {
    return (
        <Container className="dashborad-grp">
        <h1 className="mt-5 mb-3 text-center">Events Dashboard</h1>
        <div className="dashboard-btn text-right">
            <Link className="btn-admin btn  m-2" to={`/createEvent`}>
            Add Event
            </Link>
            <Link className="btn-admin btn  m-2" to={`/allUsers`}>
            User Dashboard
            </Link>
        </div>
        <Table>
            <thead>
            <tr className="text-center">
                <th>ID</th>
                <th>Event Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody></tbody>
        </Table>
        </Container>
    )
}