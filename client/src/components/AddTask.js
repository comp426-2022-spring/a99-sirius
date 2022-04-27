import { Button } from '@mui/material'
import { Dialog } from '@mui/material'
import React,{ useState } from 'react'


const AddTask = (props) => {

    const[openWindow, setOpenWindow] = useState(true)

    const toggleOpenWindow = () => {
        setOpenWindow(!openWindow)
    }

    return(
        <Dialog open={openWindow}>
            <Button onClick={toggleOpenWindow}>
                Close
            </Button>
        </Dialog>
    )
}

export default AddTask