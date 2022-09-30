class Table {
  constructor(grid) {
    this.grid = grid;
  }

  createHeader(data) {
    let open = "<thead><tr>";
    let close = "</tr></thead>";
    data.forEach((d) => {
      open += `<th>${d}</th>`;
    });

    return open + close;
  }

  createBody(data) {
    let open = "<tbody>";
    let close = "</tbody>";

    data.forEach((d) => {
      open += `
        <tr>
          <td>${d[0]}</td>
          <td>${d[1]}</td>
          <td>${d[2]}</td>
          <td>${d[3]}</td>
        </tr>
      `;
    });

    return open + close;
  }

  render(element) {
    let table =
      "<table class='table table-hover'>" +
      this.createHeader(this.grid.columns) +
      this.createBody(this.grid.data) +
      "</table>";
    element.innerHTML = table;
  }
}

const table = new Table({
  columns: ["Name", "Email", "Age", "Address"],
  data: [
    ["Tiger Nixon", "Nixon.eduwork@gmail.com", "17", "Edinburgh"],
    ["Garrett Winters", "Winters.eduwork@gmail.com", "18", "Tokyo"],
    ["Ashton Cox", "Cox.eduwork@gmail.com", "19", "San Francisco"],
    ["Cedric Kelly", "Cedric.eduwork@gmail.com", "17", "Edinburgh"],
    ["Airi Satou", "Satou.eduwork@gmail.com", "18", "Tokyo"]
  ]
});
const app = document.getElementById("app");
table.render(app);
