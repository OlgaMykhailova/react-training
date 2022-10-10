import { Button } from './Button/Button';
import { Box } from './Box';

export const App = () => {
  return (
    <div>
      <Box pt={2}>
        <Button>Submit</Button>
        <Button>Open</Button>
        <Button>Find</Button>
      </Box>
    </div>
  );
};
