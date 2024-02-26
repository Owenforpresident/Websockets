import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Typography from '@mui/material/Typography';
import "./LeaderBoardTable.styles.css";

interface PlayerData {
  country: string;
  player: string;
  tries: number;
  rank: number;
}

interface LeaderboardTableProps {
  data: PlayerData[];
  page: number;
  rowsPerPage: number;
}

const LeaderboardTable = ({
  data,
  page,
  rowsPerPage,
}: LeaderboardTableProps) => {
  return (
    <TableContainer component={Paper} className="table-container">
      <Table>
        <TableHead>
          <TableRow className="table-row" >
            <TableCell className="table-cell" >
              <Typography variant="h6">Player</Typography>
            </TableCell>
            <TableCell className="table-cell" align="right">
              <Typography variant="h6">Tries</Typography>
            </TableCell>
            <TableCell className="table-cell" align="right">
              <Typography variant="h6">Rank</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((player, index) => (
              <TableRow key={index} className="table-row" data-testid="table-row">
                <TableCell className="table-cell">
                  <div className="player-container">
                    <img
                      src={`Avatars/${player.country}.png`}
                      alt={player.country}
                      className="avatar"
                    />
                    <Typography variant="body2" >{player.player}</Typography>
                  </div>
                </TableCell>
                <TableCell className="table-cell" align="right">
                  <Typography variant="body2">{player.tries}</Typography>
                </TableCell>
                <TableCell className="table-cell" align="right"> 
                  <Typography variant="body2">{player.rank}</Typography>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaderboardTable;
