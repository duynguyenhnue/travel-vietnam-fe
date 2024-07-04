import React, { ChangeEvent, useState, type FC, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/common/scrollbar/scrollbar';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Menu, MenuItem, TableHead } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch, useSelector } from 'src/redux/store';
import { setPagination } from 'src/redux/slices/hr/candidate/candidate';
import { MenuPaperStyle } from './styles/menu-paper-style';
import { getRoles } from 'src/redux/slices/roles';
import { RolesTransactionsProps } from 'src/types/roles';

export const ListRole: FC<RolesTransactionsProps> = (props) => {
  const { setViewOpen, setCurrentRole, findNameById } = props;
  const { roles, roleLength, page, size } = useSelector(
    (state) => state.roles
  );
  
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPagination(newPage, size));
    dispatch(getRoles(newPage, size));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPagination(page, +event.target.value));
    dispatch(getRoles(page, +event.target.value));
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentRole(index);
  };
  const handleClose = (name: string) => {
    setAnchorEl(null);
    setViewOpen((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  useEffect(() => {  
    getRoles()
  },[])
  

  return (
    <Card>
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>{''}</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Permissions</TableCell>
              <TableCell>{''}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles &&
              roles.slice(0, page * size + size).map((transaction, index: number) => {
                return (
                  <TableRow
                    key={transaction._id}
                    hover
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell width={50}>
                      <Box
                        sx={{
                          p: 1,
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? 'neutral.800' : 'neutral.100',
                          borderRadius: 2,
                          width: '32px',
                          height: '32px',
                          display: 'flex',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography
                          align="center"
                          color="text.primary"
                          variant="caption"
                        >
                          {page * size + index + 1}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <div>
                        <Typography variant="subtitle2">{transaction.name}</Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <Typography variant="subtitle2">

                        {transaction.permissions.map(permission => findNameById(permission)).join(", ")}
                        </Typography>
                      </div>
                    </TableCell>
                    
                    <TableCell align='right'>
                      <IconButton
                        onClick={(event) => handleClick(event, transaction?._id || '')}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        aria-valuenow={index}
                      >
                        <MoreHorizIcon sx={{ width: 32, height: 32 }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={roleLength || 0}
        rowsPerPage={size}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={t(tokens.nav.rowsPerPage)}
      />

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={() => handleClose('')}
        onClick={() => handleClose('')}
        PaperProps={MenuPaperStyle}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleClose('view')}>View</MenuItem>
        <MenuItem onClick={() => handleClose('edit')}>Edit</MenuItem>
        <MenuItem
          onClick={() => handleClose('delete')}
          sx={{ color: 'error.dark' }}
        >
          Delete
        </MenuItem>
      </Menu>
    </Card>
  );
};
