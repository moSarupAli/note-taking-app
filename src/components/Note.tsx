import { Box, Button, Card, CardContent, Typography, styled } from "@mui/material";
import { NoteObject } from "../models/note";


interface INoteProps {
  note: NoteObject,
  deleteNote: (id: number) => void
}

const StyledCard = styled(Card)`
    width: 400px;
    margin: 20px
`;

const Wrapper = styled(Box)`
    & > button {
        border: 1px solid #000;
        background: #fff;
        margin-top: 5px;
    }
`

const NoteTitle = styled(Typography)`
    font-size: 25px;
    font-weight: 600;
`

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {


  return (
      <StyledCard style={{ backgroundColor: note.color }} >
        <CardContent>
            <Wrapper>
              <NoteTitle>{note.title}</NoteTitle>
              <Typography>{note.details}</Typography>
              <Typography>{note.date}</Typography>
              <Button variant="outlined" onClick={() => deleteNote(note.id)} >Delete</Button>
            </Wrapper>
        </CardContent>
      </StyledCard>
  )
}

export default Note;