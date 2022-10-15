<?php
// membuat fungsi
function hitungLuasLingkaran($jari)
{
    $phi = 3.14;
    $LuasLingkaran = $phi * $jari *$jari;
    return $LuasLingkaran;
}

// memanggil fungsi
echo hitungLuasLingkaran(5);
echo "<br>";
echo hitungLuasLingkaran(7);
echo "<br>";
echo hitungLuasLingkaran(10);