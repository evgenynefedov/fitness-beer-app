import React, { useEffect, useState } from 'react';
import Item from './Item'

export default function List({bars}) {
    return (
        <>
            {bars.map(b => <Item key={b.name} name={b.name} />)}
        </>
    );
}