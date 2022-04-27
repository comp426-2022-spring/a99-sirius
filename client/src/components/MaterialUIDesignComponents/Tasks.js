import { Button } from '@mui/material'
import { Container, Grid} from '@mui/material'
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import React from 'react'
import Task from './Task';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: '100%',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, ),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  
}));

const Tasks = (props) => {

    const {tasks} = props

    return(
        <Container 
            component="main"
            sx={{
                borderRadius: 2,
                paddingLeft: '0 !important',
                paddingRight: '0 !important',
            }}
            
        >
            <Grid container sx={{
                display: 'flex', justifyContent: 'space-evenly'
            }} >
                <Grid 
                    item xs={3} md={3}
                >
                    <Button noWrap>
                        ADD NEW TASK
                    </Button>
                </Grid>
                <Grid item xs={8} md={8}>
                <Search sx={{paddingLeft: 0}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Task..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
                </Grid>
            </Grid>
            <Grid container
                rowSpacing={2}
                mt={2}
            >
                {tasks.map((task, index) => {
                return <Task key={index} taskInfo={task}/>
                })}
            </Grid>
            
        </Container>
    )
}

export default Tasks