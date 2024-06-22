const standards = {
  domestic: {
    pH: [6, 9],
    BOD: 30,
    COD: 100,
    TSS: 30,
    Oil_Grease: 5,
    Amonia: 10,
    Total_Coliform: 3000,
    Debit: 100,
    description: `
            <table>
                <tr><th>Parameter</th><th>Maximum Value</th></tr>
                <tr><td>pH</td><td>6-9</td></tr>
                <tr><td>BOD</td><td>30 mg/L</td></tr>
                <tr><td>COD</td><td>100 mg/L</td></tr>
                <tr><td>TSS</td><td>30 mg/L</td></tr>
                <tr><td>Oil & Grease</td><td>5 mg/L</td></tr>
                <tr><td>Amonia</td><td>10 mg/L</td></tr>
                <tr><td>Total Coliform</td><td>3000 Jumlah/100mL</td></tr>
                <tr><td>Debit</td><td>100 L/orang/hari</td></tr>
            </table>`,
  },
  palm_oil: {
    pH: [6, 9],
    BOD5: 100,
    COD: 350,
    TSS: 250,
    Oil_Grease: 25,
    Nitrogen: 50,
    Debit_Limbah: 2.5,
    description: `
            <table>
                <tr><th>Parameter</th><th>Maximum Value</th></tr>
                <tr><td>pH</td><td>6-9</td></tr>
                <tr><td>BOD<sub>5</sub></td><td>100 mg/L</td></tr>
                <tr><td>COD</td><td>350 mg/L</td></tr>
                <tr><td>TSS</td><td>250 mg/L</td></tr>
                <tr><td>Oil & Grease</td><td>25 mg/L</td></tr>
                <tr><td>Nitrogen</td><td>50 mg/L</td></tr>
                <tr><td>Debit Limbah</td><td>2.5 m²/ton CPO</td></tr>
            </table>`,
  },
  meat_processing: {
    pH: [6, 9],
    BOD: 125,
    COD: 250,
    TSS: 100,
    Amonia: 10,
    Oil_Grease: 10,
    Kuantitas_Air_Limbah: 6,
    description: `
            <table>
                <tr><th>Parameter</th><th>Maximum Value</th></tr>
                <tr><td>pH</td><td>6-9</td></tr>
                <tr><td>BOD</td><td>125 mg/L</td></tr>
                <tr><td>COD</td><td>250 mg/L</td></tr>
                <tr><td>TSS</td><td>100 mg/L</td></tr>
                <tr><td>Amonia</td><td>10 mg/L</td></tr>
                <tr><td>Oil & Grease</td><td>10 mg/L</td></tr>
                <tr><td>Kuantitas Air Limbah</td><td>6 m³/ton bahan baku</td></tr>
            </table>`,
  },
  traditional_medicine: {
    pH: [6, 9],
    BOD: 75,
    COD: 150,
    TSS: 100,
    Fenol: 0.2,
    Kuantitas_Air_Limbah: 15,
    description: `
            <table>
                <tr><th>Parameter</th><th>Maximum Value</th></tr>
                <tr><td>pH</td><td>6-9</td></tr>
                <tr><td>BOD</td><td>75 mg/L</td></tr>
                <tr><td>COD</td><td>150 mg/L</td></tr>
                <tr><td>TSS</td><td>100 mg/L</td></tr>
                <tr><td>Fenol</td><td>0.2 mg/L</td></tr>
                <tr><td>Kuantitas Air Limbah</td><td>15 m³/ton bahan baku</td></tr>
            </table>`,
  },
  electronics: {
    pH: [6, 9],
    BOD5: 50,
    COD: 110,
    TSS: 60,
    Amonia: 10,
    F: 10,
    Fenol: 0.5,
    Oil_Grease: 10,
    Cu: 0.6,
    Zn: 5,
    Cr6: 0.1,
    Cd: 0.1,
    Hg: 0.002,
    Pb: 0.1,
    Ni: 0.5,
    description: `
            <table>
                <tr><th>Parameter</th><th>Maximum Value</th></tr>
                <tr><td>pH</td><td>6-9</td></tr>
                <tr><td>BOD<sub>5</sub></td><td>50 mg/L</td></tr>
                <tr><td>COD</td><td>110 mg/L</td></tr>
                <tr><td>TSS</td><td>60 mg/L</td></tr>
                <tr><td>Amonia</td><td>10 mg/L</td></tr>
                <tr><td>F</td><td>10 mg/L</td></tr>
                <tr><td>Fenol</td><td>0.5 mg/L</td></tr>
                <tr><td>Oil & Grease</td><td>10 mg/L</td></tr>
                <tr><td>Cu</td><td>0.6 mg/L</td></tr>
                <tr><td>Zn</td><td>5 mg/L</td></tr>
                <tr><td>Cr<sup>6+</sup></td><td>0.1 mg/L</td></tr>
                <tr><td>Cd</td><td>0.1 mg/L</td></tr>
                <tr><td>Hg</td><td>0.002 mg/L</td></tr>
                <tr><td>Pb</td><td>0.1 mg/L</td></tr>
                <tr><td>Ni</td><td>0.5 mg/L</td></tr>
            </table>`,
  },
  ceramics: {
    pH: [6, 9],
    TSS: 100,
    Co: 0.6,
    Pb: 1.0,
    Cd: 0.1,
    Krom_Total: 1.0,
    Kuantitas_Air_Limbah: 1.5,
    description: `
            <table>
                <tr><th>Parameter</th><th>Maximum Value</th></tr>
                <tr><td>pH</td><td>6-9</td></tr>
                <tr><td>TSS</td><td>100 mg/L</td></tr>
                <tr><td>Co</td><td>0.6 mg/L</td></tr>
                <tr><td>Pb</td><td>1.0 mg/L</td></tr>
                <tr><td>Cd</td><td>0.1 mg/L</td></tr>
                <tr><td>Krom Total</td><td>1.0 mg/L</td></tr>
                <tr><td>Kuantitas Air Limbah</td><td>1.5 m³/ton bahan baku</td></tr>
            </table>`,
  },
};

function updateInfo() {
  const standard = document.getElementById("standard").value;
  const info = standards[standard];
  document.getElementById("info").innerHTML = info.description;

  // Mengosongkan hasil sebelum memperbarui konten parameter
  document.getElementById("result").innerHTML = "";

  let parametersHTML = "";

  for (let key in info) {
    if (key !== "description") {
      let label = key.replace("_", " ");
      if (key === "BOD5") {
        label = "BOD<sub>5</sub>";
      } else if (key === "Cr6") {
        label = "Cr<sup>6+</sup>";
      }
      parametersHTML += `
                <div class="form-group">
                    <label for="${key}">${label} (${
        Array.isArray(info[key]) ? info[key].join("-") : info[key]
      } mg/L):</label>
                    <input type="text" id="${key}" name="${key}">
                </div>`;
    }
  }

  document.getElementById("parameters").innerHTML = parametersHTML;
}

function checkQuality() {
  // Mengosongkan hasil sebelum menampilkan hasil baru
  document.getElementById("result").innerHTML = "";

  const standard = document.getElementById("standard").value;
  const info = standards[standard];
  let resultHTML = "<h3>Results:</h3>";
  let pass = true;

  for (let key in info) {
    if (key !== "description") {
      const input = document.getElementById(key).value;
      if (input) {
        const value = parseFloat(input);
        if (Array.isArray(info[key])) {
          if (value < info[key][0] || value > info[key][1]) {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${value} <span class="fail">(Tidak Masuk Baku Mutu)</span></p>`;
            pass = false;
          } else {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${value} <span class="pass">(Masuk Baku Mutu)</span></p>`;
          }
        } else {
          if (value > info[key]) {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${value} <span class="fail">(Tidak Masuk Baku Mutu)</span></p>`;
            pass = false;
          } else {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${value} <span class="pass">(Masuk Baku Mutu)</span></p>`;
          }
        }
      }
    }
  }

  resultHTML += `<p class="${pass ? "pass" : "fail"}">${
    pass
      ? "All parameters are within the acceptable range."
      : "Some parameters are outside the acceptable range."
  }</p>`;
  document.getElementById("result").innerHTML = resultHTML;
}

document.addEventListener("DOMContentLoaded", function () {
  updateInfo(); // Panggil fungsi updateInfo saat halaman pertama kali dimuat
});
