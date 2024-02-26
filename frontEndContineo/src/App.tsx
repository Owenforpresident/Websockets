import React from "react";
import useWebSocket from "./customHooks/useWebSocket";
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";
import Title from "./components/Title/Title";
import LeaderboardTable from "./components/LeaderBoardTable/LeaderBoardTable";
import { useSelector, useDispatch } from "react-redux";
import { Container, TablePagination } from "@mui/material";
import { setPage, setRowsPerPage } from "./actions/paginationActions";
import "./App.css";

interface PlayerData {
  country: string;
  player: string;
  tries: number;
  rank: number;
}

function App() {
  const { data, error, isLoading } = useWebSocket("ws://localhost:8000");
  const page = useSelector((state: any) => state.pagination.page);
  const rowsPerPage = useSelector((state: any) => state.pagination.rowsPerPage);
  const dispatch = useDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setRowsPerPage(parseInt(event.target.value)));
    dispatch(setPage(0));
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const playerData: PlayerData[] = data?.map((player: PlayerData) => ({
    country: player.country,
    player: player.player,
    tries: player.tries,
    rank: player.rank,
  }));

  return (
    <Container className="container">
      <Title />
      {data && (
        <div className="table-wrapper">
          <LeaderboardTable
            data={playerData}
            page={page}
            rowsPerPage={rowsPerPage}
          />
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={playerData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            className="pagination"
            style={{ color: "white" }}
          />
        </div>
      )}
    </Container>
  );
}

export default App;
