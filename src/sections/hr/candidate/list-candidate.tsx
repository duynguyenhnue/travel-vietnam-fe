import React, { ChangeEvent, useState, type FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/common/scrollbar/scrollbar';
import type { SeverityPillColor } from 'src/components/common/alert/severity-pill';
import { SeverityPill } from 'src/components/common/alert/severity-pill';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Menu, MenuItem, TableHead } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { useDispatch, useSelector } from 'src/redux/store';
import { getCandidate, setPagination } from 'src/redux/slices/hr/candidate/candidate';
import { MenuPaperStyle } from './styles/menu-paper-style';
import { CandidateTransactionsProps } from 'src/types/hr/candidate';

const statusMap: Record<string, SeverityPillColor> = {
  reject: 'error',
  schedule_interview: 'primary',
  interviewed: 'info',
  pass: 'success',
  onboard: 'secondary',
};

export const CandidateTransactions: FC<CandidateTransactionsProps> = (props) => {
  const { setViewOpen, setCurrentCandidate } = props;
  const { candidates, candidateLength, page, size, filterStatus } = useSelector(
    (state) => state.candidate
  );
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleChangePage = (event: unknown, newPage: number) => {
    dispatch(setPagination(newPage, size));
    dispatch(getCandidate(newPage, size, filterStatus));
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setPagination(page, +event.target.value));
    dispatch(getCandidate(page, +event.target.value, filterStatus));
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentCandidate(index);
  };
  const handleClose = (name: string) => {
    setAnchorEl(null);
    setViewOpen((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  };

  return (
    <Card>
      <Scrollbar>
        <Table sx={{ minWidth: 600 }}>
          <TableHead>
            <TableRow>
              <TableCell>{''}</TableCell>
              <TableCell>{t(tokens.nav.name)}</TableCell>
              <TableCell>{t(tokens.nav.contact)}</TableCell>
              <TableCell>{t(tokens.nav.role)}</TableCell>
              <TableCell>{t(tokens.nav.interviewInformation)}</TableCell>
              <TableCell>{t(tokens.nav.projectExperience)}</TableCell>
              <TableCell>{t(tokens.nav.skillsSummary)}</TableCell>
              <TableCell>{t(tokens.nav.status)}</TableCell>
              <TableCell>{''}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates &&
              candidates.slice(0, page * size + size).map((transaction, index: number) => {
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
                          {t(tokens.nav.email)}: {transaction.contact?.email}
                        </Typography>
                        <Typography variant="subtitle2">
                          {t(tokens.nav.phone)}: {transaction.contact?.phone}
                        </Typography>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{transaction.role}</Typography>
                    </TableCell>

                    <TableCell>
                      <div>
                        <Typography variant="subtitle2">
                          {t(tokens.nav.time)}: {transaction.interviewInformation?.dateTime}
                        </Typography>
                        <Typography variant="subtitle2">
                          {t(tokens.nav.link)}:{' '}
                          <Link
                            target="blank"
                            to={transaction.interviewInformation?.linkGmeet}
                          >
                            {transaction.interviewInformation?.linkGmeet}
                          </Link>
                        </Typography>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Typography variant="subtitle2">{transaction?.projectExperience}</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2">{transaction?.skillsSummary}</Typography>
                    </TableCell>
                    <TableCell>
                      <SeverityPill color={statusMap[transaction?.status]}>
                        {transaction?.status}
                      </SeverityPill>
                    </TableCell>
                    <TableCell>
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
        count={candidateLength || 0}
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
        {!(location.pathname === '/hr/history') && (
          <>
            <MenuItem onClick={() => handleClose('send_email')}>Send Email</MenuItem>
            <MenuItem onClick={() => handleClose('edit')}>Edit</MenuItem>
          </>
        )}
        <MenuItem onClick={() => handleClose('view')}>View</MenuItem>
        <MenuItem
          onClick={() => handleClose('delete')}
          sx={{ color: 'error.dark' }}
        >
          Delete
        </MenuItem>

        {location.pathname === '/hr/history' && (
          <MenuItem onClick={() => handleClose('restore')}>Restore</MenuItem>
        )}
      </Menu>
    </Card>
  );
};
