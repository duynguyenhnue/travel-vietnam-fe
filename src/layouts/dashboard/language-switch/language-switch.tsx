import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { usePopover } from 'src/hooks/use-popover';

import { LanguagePopover } from './language-popover';

type Language = 'en' | 'vi';

const languages: Record<Language, string> = {
  en: '/assets/flags/flag-uk.svg',
  vi: '/assets/flags/flag-vi.svg',
};

export const LanguageSwitch: FC = () => {
  const { i18n } = useTranslation();
  const popover = usePopover<HTMLButtonElement>();

  const flag = languages[i18n.language as Language];

  return (
    <>
      <Tooltip title="Language">
        <IconButton
          onClick={popover.handleOpen}
          ref={popover.anchorRef}
          sx={{
            '&:hover': {
              backgroundColor: '#faa935',
            },
          }}
        >
          <Box
            sx={{
              width: 28,
              '& img': {
                width: '100%',
              },
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={flag} />
          </Box>
        </IconButton>
      </Tooltip>
      <LanguagePopover
        anchorEl={popover.anchorRef.current}
        onClose={popover.handleClose}
        open={popover.open}
      />
    </>
  );
};
