import axios from 'axios'; // Correct the axios import
import { useState, useEffect } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the API when the component mounts
        fetch('https://jsonplaceholder.typicode.com/posts')
            . then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            . then((data) => setUsers(data))
            .catch((error) => console.error('There was a problem with the fetch operation:', error));
    }, []); // Empty dependency array to run the effect only once

    const deleteUser = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            . then(() => {
                // Update the state to remove the deleted user from the list
                setUsers(users.filter((user) => user.id !== id));
            })
            .catch((error) => console.error('There was a problem with the delete operation:', error));
    };

    const userRows = users.map((user, index) => (
        <tr key={index}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
                
            </td>
        </tr>
    ));

    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>

                    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>    <tr>
                        <th>ali</th>
                        <th>ali</th>
                        <th>Action</th>
                    </tr>
                    {userRows}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
