import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { getCandidate, setFillterStatus } from 'src/redux/slices/hr/candidate/candidate';
import { useDispatch, useSelector } from 'src/redux/store';

const FilterCandidate = () => {
  const { t } = useTranslation();
  const { page, size } = useSelector((state) => state.candidate);
  const dispatch = useDispatch();
  const handleChangeStatus = (event: ChangeEvent<{ value: string }>) => {
    dispatch(setFillterStatus(event.target.value));
    dispatch(getCandidate(page, size, event.target.value));
  };
  const listStatus = [
    {
      value: '',
      label: '',
    },
    {
      value: 'reject',
      label: 'Reject',
    },
    {
      value: 'schedule_interview',
      label: 'Schedule Interview',
    },
    {
      value: 'interviewed',
      label: 'Interviewed',
    },
    {
      value: 'pass',
      label: 'Pass',
    },
    {
      value: 'onboard',
      label: 'Onboard',
    },
  ];
  return (
    <TextField
      select
      fullWidth
      label={t(tokens.nav.status)}
      SelectProps={{
        native: true,
      }}
      onChange={handleChangeStatus}
      name="status"
    >
      {listStatus.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </TextField>
  );
};

export default FilterCandidate;
