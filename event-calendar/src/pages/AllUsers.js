import { Container, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function AllUsers() {
    return (
        <Container className="dashborad-grp">
        <h1 className="mt-5 mb-3 text-center">User Dashboard</h1>
        <div className="dashboard-btn text-right">
            <Link className="btn-admin btn  m-2" to={`/register`}>
            Add User
            </Link>
            <Link className="btn-admin btn  m-2" to={`/allEvents`}>
            Event Dashboard
            </Link>
        </div>
        <Table>
            <thead>
            <tr className="text-center">
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody></tbody>
        </Table>
        </Container>
    )
}