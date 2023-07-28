import React from "react";
import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import theme from "../theme";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Accordians = ({summary,content}) => {
  return (
    <>
      <Accordion defaultExpanded={true} sx={{"backgroundColor":theme.palette.primary.main,color:theme.palette.fontColor.light ,padding:3,mt:"1rem",borderRadius:".8rem"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontSize={"1.4rem"}>{summary}</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography fontSize={"1.25rem"}>
            {content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
