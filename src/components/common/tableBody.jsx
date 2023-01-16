import React, { Component } from "react";

class TableBody extends Component {
  render() {
    const { data } = this.props;

    return (
      <tdoby>
        {data.map((item) => (
          <tr>
            {columns.map((columns) => (
              <td></td>
            ))}
          </tr>
        ))}
      </tdoby>
    );
  }
}

export default TableBody;
