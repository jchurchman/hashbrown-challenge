import styled from 'styled-components'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
  max-width: 40em;
  margin: 0.5em;
`

const TweetBox = ({ text }) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography
          align="center"
          display="block"
          variant="body1"
        >
          {text}
        </Typography>
      </CardContent>
    </StyledCard>
  )
}

export default TweetBox