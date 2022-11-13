import React from 'react'
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography
} from '@mui/material';
import CountUp from 'react-countup'

const Cards = ({data: {cases, recovered, deaths} }) => {
    

    return (
      <div className="cards">
        <Container maxWidth="fluid">
          <Container>
            <Grid container spacing={2} justifyContent="space-evenly">
              {/* Card 1 */}
              <Grid
                className="card"
                item
                component={Card}
                xs={12}
                sx={{ mx: 2 }}
                md={3}
                borderBottom={5}
                borderColor="blue"
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    gutterBottom={true}
                  >
                    Infected
                  </Typography>
                  <Typography variant="h4">
                    <CountUp
                      start={0}
                      end={cases}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                  <Typography variant="body2">
                    Number of Infected people
                  </Typography>
                </CardContent>
              </Grid>

              {/* Card 2 */}
              <Grid
                className="card"
                item
                component={Card}
                xs={12}
                sx={{ mx: 2 }}
                md={3}
                borderBottom={5}
                borderColor="lightgreen"
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    gutterBottom={true}
                  >
                    Recovered
                  </Typography>
                  <Typography variant="h4">
                    <CountUp
                      start={0}
                      end={recovered}
                      duration={2.5}
                      separator=","
                    />
                  </Typography>
                  <Typography variant="body2">
                    Number of Recovered people
                  </Typography>
                </CardContent>
              </Grid>

              {/* Card 3 */}
              <Grid
                className="card"
                item
                component={Card}
                xs={12}
                sx={{ mx: 2 }}
                md={3}
                borderBottom={5}
                borderColor="red"
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    color="textSecondary"
                    gutterBottom={true}
                  >
                    Deaths
                  </Typography>
                  <Typography variant="h4">
                    <CountUp start={0} end={deaths} duration={2.5} separator="," />
                  </Typography>
                  <Typography variant="body2">Number of Dead people</Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
    );
}

export default Cards;