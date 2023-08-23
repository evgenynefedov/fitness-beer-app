import React, { useEffect, useState } from 'react';

export default function Item({name}) {
    return (
        <li key={name}>{name}</li>
    );
}