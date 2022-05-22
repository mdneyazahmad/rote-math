import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { range3 } from "../utils";

function AnswersGraph(props) {
  let minleft = props.answers.reduce(
    (acc, x) => Math.min(x.problem.left, acc),
    Number.MAX_SAFE_INTEGER
  );
  let maxleft = props.answers.reduce(
    (acc, x) => Math.max(x.problem.left, acc),
    Number.MIN_SAFE_INTEGER
  );
  let minright = props.answers.reduce(
    (acc, x) => Math.min(x.problem.right, acc),
    Number.MAX_SAFE_INTEGER
  );
  let maxright = props.answers.reduce(
    (acc, x) => Math.max(x.problem.right, acc),
    Number.MIN_SAFE_INTEGER
  );

  const isAnswerCorrect = (left, right) =>
    props.answers.filter(
      (a) => a.problem.left === left && a.problem.right === right
    )[0].success;

  return (
    <Table size="small" sx={{ width: "initial" }}>
      <TableHead>
        <TableRow sx={{ border: 0 }}>
          <TableCell component="th"></TableCell>
          {range3(minright, maxright).map((right, index) => (
            <TableCell component="th" key={index}>
              {right}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      {range3(minleft, maxleft).map((left, index) => (
        <TableRow sx={{ border: 0 }} key={index}>
          <TableCell component="th" scope="row">
            {left}
          </TableCell>
          {range3(minright, maxright).map((right, index) => (
            <TableCell key={index}>
              {isAnswerCorrect(left, right) ? "✅" : "❌"}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </Table>
  );
}

export default AnswersGraph;
