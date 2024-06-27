// Mendefinisikan objek array `standards` yang berisi berbagai standar untuk berbagai kategori industri
const standards = {
  // Standar untuk kategori domestik
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
            </table>`, // Deskripsi standar dalam bentuk tabel HTML
  },
  // Standar untuk kategori kelapa sawit
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
  // Standar untuk kategori pengolahan daging
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
  // Standar untuk kategori obat tradisional
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
  // Standar untuk kategori elektronik
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
  // Standar untuk kategori keramik
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

// Fungsi untuk memperbarui informasi standar yang dipilih
function updateInfo() {
  const standard = document.getElementById("standard").value;
  const info = standards[standard];
  document.getElementById("info").innerHTML = info.description;

  // Mengosongkan hasil sebelumnya saat memperbarui informasi
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

      let unit = "mg/L";
      if (key === "Debit") {
        unit = "L/orang/hari";
      } else if (key === "Kuantitas_Air_Limbah") {
        unit = "m³/ton bahan baku";
      } else if (key === "Debit_Limbah") {
        unit = "m²/ton CPO";
      }

      parametersHTML += `
        <div class="form-group">
          <label for="${key}">${label} (${unit}):</label>
          <input type="text" id="${key}" name="${key}">
        </div>`;
    }
  }

  document.getElementById("parameters").innerHTML = parametersHTML;
}

// Fungsi untuk memeriksa kualitas input yang dimasukkan pengguna
function checkQuality() {
  // Mengosongkan elemen dengan id "result"
  document.getElementById("result").innerHTML = "";

  // Mengambil semua input di dalam elemen dengan id "parameters"
  const inputs = document.querySelectorAll("#parameters input");

  // Menghapus kelas "warning" dari setiap input
  inputs.forEach((input) => input.classList.remove("warning"));

  // Mengambil nilai dari elemen dengan id "standard"
  const standard = document.getElementById("standard").value;

  // Mengambil informasi standar berdasarkan nilai yang diambil
  const info = standards[standard];

  // Menyiapkan variabel untuk HTML hasil dan status pemeriksaan
  let resultHTML = "<h3>Results:</h3>";
  let pass = true;
  let valid = true;

  // Looping melalui setiap key di dalam objek info
  for (let key in info) {
    if (key !== "description") {
      // Mengambil elemen input berdasarkan id key
      const input = document.getElementById(key);
      // Mengambil dan memangkas nilai input
      const value = input.value.trim();

      // Jika nilai kosong, tambahkan kelas "warning" dan set valid menjadi false
      if (!value) {
        input.classList.add("warning");
        valid = false;
      } else {
        // Konversi nilai menjadi angka
        const numValue = parseFloat(value);

        // Jika nilai info untuk key adalah array (rentang nilai)
        if (Array.isArray(info[key])) {
          // Cek apakah nilai berada di dalam rentang
          if (numValue < info[key][0] || numValue > info[key][1]) {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${numValue} <span class="fail">Tidak Masuk Baku Mutu</span></p>`;
            pass = false;
          } else {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${numValue} <span class="pass">Masuk Baku Mutu</span></p>`;
          }
        } else {
          // Jika nilai info untuk key adalah angka (nilai maksimum)
          if (numValue > info[key]) {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${numValue} <span class="fail">Tidak Masuk Baku Mutu</span></p>`;
            pass = false;
          } else {
            resultHTML += `<p>${key.replace(
              "_",
              " "
            )}: ${numValue} <span class="pass">Masuk Baku Mutu</span></p>`;
          }
        }
      }
    }
  }

  // Jika ada input yang tidak valid, tambahkan pesan peringatan ke hasil HTML
  if (!valid) {
    resultHTML =
      "<p class='warning'>Tolong isi semua input field.</p>" + resultHTML;
  } else {
    // Tambahkan pesan hasil akhir ke hasil HTML
    resultHTML += `<p class="${pass ? "pass" : "fail"}">${
      pass
        ? "Semua parameter memenuhi standar maksimum."
        : "Beberapa parameter berada di luar batas standar maksimum."
    }</p>`;
  }

  // Menampilkan hasil di elemen dengan id "result"
  document.getElementById("result").innerHTML = resultHTML;
}

// Menambahkan event listener untuk menjalankan fungsi updateInfo setelah DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  updateInfo();
});
