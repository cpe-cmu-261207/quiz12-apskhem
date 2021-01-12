//your code here!

const myId = 620610820;
const idInput = document.getElementById("input-number");
const idBtn = document.getElementById("button-compute");
const studentId = document.getElementById("compute-result");

const tRowInput = document.getElementById("input-row");
const tColInput = document.getElementById("input-col");
const tBtn = document.getElementById("button-create-table");
const table = document.getElementById("table");

idBtn.addEventListener("click", () => {
    studentId.textContent = myId + (idInput.valueAsNumber || 0);
});

tBtn.addEventListener("click", () => {
    const row = tRowInput.valueAsNumber || 0;
    const col = tColInput.valueAsNumber || 0;

    let z = 1;
    for (let i = 0; i < row; i++) {
        const r = document.createElement("tr");

        for (let j = 0; j < col; j++) {
            const d = document.createElement("td");

            if ((i + j) % 2 === 0) {
                d.textContent = "*";
            }
            else {
                d.textContent = z;
            }

            z++;
            r.append(d);
        }

        table.append(r);
    }
});