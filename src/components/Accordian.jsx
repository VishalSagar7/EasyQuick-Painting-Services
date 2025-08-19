import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
    accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Heading from './Heading';

const accordionData = [
    {
        id: "panel1",
        title: "Surface Preparation:",
        content:
            [
                "For new surfaces: Clean the surface to remove any loose particles or dust.",
                "For repainting: Remove any loose or peeling paint by sanding. Fill cracks and holes with filler and sand smooth. ",
                "General: Protect areas like trims, edges, and fixtures with painter's tape. "
            ]
    },
    {
        id: "panel2",
        title: "Priming:",
        content:
            [
                "Apply a coat of primer to create an even base and enhance paint adhesion, especially on porous or previously painted surfaces. ",
                "Asian Paints offers primers like Deco Prime wall primer for absorbent or new surfaces.",
                "For exterior walls, a water-based exterior wall primer is recommended according to Asian Paints. "
            ]
    },
    {
        id: "panel3",
        title: "Putty Application (if needed):",
        content:
            [
                "For leveling minor undulations on walls, apply a coat of putty (like Asian Paints Acrylic Wall Putty) with a putty knife.",
                "Sand the putty layer smooth after it dries. "
            ]
    },
    {
        id: "panel4",
        title: "Painting:",
        content:
            [
                "First Coat: Apply the first coat of paint using a roller or brush. ",
                "Second Coat: Allow the first coat to dry according to the product instructions and then apply a second coat for better coverage and a smoother finish. ",
                "Drying Time: Ensure adequate drying time between coats to avoid streaks or peeling. ",
                "Final Sanding: For a smoother finish, you can lightly sand the surface with fine sandpaper (e.g., 320 grit for Royale Aspira) before applying the final coat. ",
                "Clean Up: Wipe down the surface to remove any dust before applying the final coat. "
            ]
    },
    {
        id: "panel5",
        title: "Finishing Touches:",
        content:
            [
                "Touch-ups: Address any areas needing touch-ups.",
                "Cleaning: Clean your tools and the painted area.  "
            ]
    },
];


const style = {
    border: 'none',
    backgroundColor: 'transparent',
    px: { xs: 2, md: 5 }, // 0 20px on small screens, 0 40px on md & up
}

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
        transform: 'rotate(90deg)',
    },
    [`& .${accordionSummaryClasses.content}`]: {
        marginLeft: theme.spacing(1),
    },
    ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255, 255, 255, .05)',
    }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className='pt-4 pb-8'>

            <Heading text={"Our Specilities"} />

            {
                accordionData.map(({ id, title, content }) => (
                    <Accordion
                        key={id}
                        sx={style}
                        expanded={expanded === id}
                        onChange={handleChange(id)}
                    >
                        <AccordionSummary
                            sx={{ backgroundColor: "transparent" }}
                            aria-controls={`${id}-content`}
                            id={`${id}-header`}
                        >
                            <Typography sx={{ fontWeight: 500, fontSize: "large" }} component="span">{title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {content.map((line, index) => (
                                <Typography key={index} sx={{ display: "block", mb: 1, fontSize: "large" }}>
                                    {line}
                                </Typography>
                            ))}
                        </AccordionDetails>
                    </Accordion>
                ))}
        </div>
    );
}
