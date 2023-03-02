import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCharacters } from './charactersSlice'

import { Container } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { ModalView } from '../../features/modal/ModalView';

import Modal from '@mui/material/Modal';

//import other actions

const columns = [
  // {
  //   field: 'imageUrl',
  //   headerName: 'Thumb',
  //   width: 80,
  //   sortable: false,
  //   filterable: false,
  //   renderCell: params => <img src={params.value} alt='img'/>,
  //   align: 'center'
  // },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    hover: true,
    selected: true,
  },
  { field: 'tvShows', headerName: 'TVshows', sortable: false, width: 300 },
  {
    field: 'videoGames',
    headerName: 'VideoGames',
    filterable: false,
    sortable: false,
    width: 400,
  },
  {
    field: 'allies',
    headerName: 'Allies',
    filterable: false,
    sortable: false,
    width: 200,
  },
  {
    field: 'enemies',
    headerName: 'Enemies',
    filterable: false,
    sortable: false,
    width: 200,
  },
];

const handleRowClick = params => {
   console.log(
    'row clicked!',
    `
    Character="${params.row.name}" 
    tvShows="${params.row.tvShows}" 
    VideoGames="${params.row.videoGames}" `
  );
  //setRow(params.id)

  // setMessage(`Character
  // "${params.row.name}"
  // tvShows="${params.row.tvShows}"
  // VideoGames="${params.row.videoGames}"
  // image="${params.row.imageUrl}" `);

};

export const CharactersView = () => {
  const [pageSize, setPageSize] = useState(50);

  const character = useSelector(state => state.characters);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);
  return (
    <>
      <Container>
      {character.loading && <div>Loading...</div>}
      {!character.loading && character.error ? (
        <div>Error: {character.error}</div>
      ) : null}
      {!character.loading && character.characters.length ? (
        <Box sx={{ height: 800, width: '100%' }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ textAlign: 'center', mt: 3, mb: 3 }}
          >
            Characters
          </Typography>
          <DataGrid
            getRowId={row => row._id}
            rows={character.characters}
            columns={columns}
            pageSize={pageSize}
            rowsPerPageOptions={[10, 20, 50, 100, 200, 500]}
            //checkboxSelection
            pagination
            onPageSizeChange={newPageSize => setPageSize(newPageSize)}
            autoHeight
            onRowClick={handleRowClick}
            //SelectionMode
            // experimentalFeatures={{ newEditingApi: true }}
          />
        </Box>
      ) : null}
      </Container>
    </>
  );
};

// export const CharactersModal = () => {

//  // const [open, setOpen] = useState(true);
// // const [show, setShow] = useState(true)
//   const show = useSelector(state => state.modalShow(true));
//   return(
//     <>
//         <div>
//           <ModalView 
//           show={show} 

//           />
//         </div>
//             </>
//   )
//  }