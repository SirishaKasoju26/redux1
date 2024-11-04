import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux1/Actions/userActions';
import './UserList.css';

const UserList = () => {
    const dispatch = useDispatch();
    const { loading, users, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;

    return (
        <div className="user-list">
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} className="user-item">
                        <h3>{user.name}</h3>
                        <p>Email: {user.email}</p>
                        <p>Website: {user.website}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;