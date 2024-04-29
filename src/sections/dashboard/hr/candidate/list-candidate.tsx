import { useState, type FC } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { Scrollbar } from 'src/components/scrollbar';
import type { SeverityPillColor } from 'src/components/severity-pill';
import { SeverityPill } from 'src/components/severity-pill';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Menu, MenuItem, TableHead } from '@mui/material';
import { Link } from 'react-router-dom';
import TablePagination from '@mui/material/TablePagination';
import { CandidateType } from 'src/types/hr/candidate';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

const statusMap: Record<string, SeverityPillColor> = {
  reject: 'error',
  schedule_interview: 'primary',
  interviewed: 'info',
  pass: 'success',
  onboard: 'secondary',
};

interface CandidateTransactionsProps {
  candidates: CandidateType[] | null;
  setViewOpen: any;
  setCurrentCandidate: any;
}

export const CandidateTransactions: FC<CandidateTransactionsProps> = (props) => {
  const { candidates, setViewOpen, setCurrentCandidate } = props;
  const { t } = useTranslation();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any, index: string) => {
    setAnchorEl(event.currentTarget);
    setCurrentCandidate(index);
  };
  const handleClose = (name: string) => {
    setAnchorEl(null);
    setViewOpen(
      (prevState: { send_email: boolean; view: boolean; edit: boolean; delete: boolean }) => ({
        ...prevState,
        [name]: true,
      })
    );
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
              <TableCell>{t(tokens.nav.interviewInformation)}</TableCell>
              <TableCell>{t(tokens.nav.projectExperience)}</TableCell>
              <TableCell>{t(tokens.nav.skillsSummary)}</TableCell>
              <TableCell>{t(tokens.nav.status)}</TableCell>
              <TableCell>{''}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {candidates &&
              candidates
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((transaction, index: number) => {
                  return (
                    <>
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
                              {page * rowsPerPage + index + 1}
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
                              {t(tokens.nav.email)}: {transaction.contact.email}
                            </Typography>
                            <Typography variant="subtitle2">
                              {t(tokens.nav.phone)}: {transaction.contact.phone}
                            </Typography>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div>
                            <Typography variant="subtitle2">
                              {t(tokens.nav.time)}: {transaction.interviewInformation.dateTime}
                            </Typography>
                            <Typography variant="subtitle2">
                              {t(tokens.nav.link)}:{' '}
                              <Link
                                target="blank"
                                to={transaction.interviewInformation.linkGmeet}
                              >
                                {transaction.interviewInformation.linkGmeet}
                              </Link>
                            </Typography>
                          </div>
                        </TableCell>

                        <TableCell>
                          <Typography variant="subtitle2">
                            {transaction.projectExperience}
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Typography variant="subtitle2">{transaction.skillsSummary}</Typography>
                        </TableCell>
                        <TableCell>
                          <SeverityPill color={statusMap[transaction.status]}>
                            {transaction.status}
                          </SeverityPill>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={(event) => handleClick(event, transaction._id || '')}
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
                    </>
                  );
                })}
          </TableBody>
        </Table>
      </Scrollbar>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={(candidates && candidates.length) || 0}
        rowsPerPage={rowsPerPage}
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
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={() => handleClose('send_email')}>Send Email</MenuItem>
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
