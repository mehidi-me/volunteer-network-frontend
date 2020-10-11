import React from 'react';
import AdminSidbar from '../components/AdminSidbar/AdminSidbar';
import UserTable from '../components/UserTable/UserTable';

const UserList = () => {
    return (
        <>
           <AdminSidbar title="Volunteer register list"></AdminSidbar> 
           <UserTable></UserTable> 
        </>
    );
};

export default UserList;