import React from 'react';
import AddEventForm from '../components/AddEvetForm/AddEventForm';
import AdminSidbar from '../components/AdminSidbar/AdminSidbar';

const AddEvent = () => {
    return (
        <>
            <AdminSidbar title="Add Event"></AdminSidbar>
            <AddEventForm></AddEventForm>
        </>
    );
};

export default AddEvent;