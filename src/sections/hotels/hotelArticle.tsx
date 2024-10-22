import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface TextArticleProps {
  data: {
    title: string,
    content: Content[],
  }
}
interface Content {
  title: string,
  content: string[],
}
const TextArticle = ({ data }: TextArticleProps) => {
  return (
    <Container maxWidth="xl">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h5" sx={{ textAlign: 'center', flex: 1 }}>{data.title}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {data.content.map((content, index) => (
            <Box key={index}>
              <Typography variant="h6" mb={1}>
                {content.title}
              </Typography>
              {content.content.map((content, index) => (
                <Typography variant="body1" key={index} ml={2}>
                  {content}
                </Typography>
              ))}
            </Box>
          ))}
        </AccordionDetails>

      </Accordion>
    </Container>
  );
};

export default TextArticle;
