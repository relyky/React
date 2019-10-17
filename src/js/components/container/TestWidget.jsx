import React, { useState } from 'react'

export default function TestWidget(props) {
    const [counter, setCounter] = useState(13)

    const desc = { ...props, xyz: 'go go go', counter }

    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>
                {counter}+
            </button>
            <pre>{JSON.stringify(desc, null, "  ")}</pre>
        </>
    )
}
