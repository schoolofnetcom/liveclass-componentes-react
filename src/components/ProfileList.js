import React, { Component } from 'react';

// COMPONENTE DE APRESENTAÇÃO
const ProfileList = ({ data }) => {
    return (
        <li>
            <img className='img-fluid w-5' src={data.avatar_url} alt=""/>
            <label htmlFor={data.id}>{data.login}</label>
        </li>
    );
}

export default ProfileList;