<?php

class Person {
    public $nama; 
    public $alamat;
    public $jurusan;

    public function setNama($data)
    {
        $this->nama = $data;
    }

    public function getNama()
    {
        return $this->nama;
    }
}

$suci = new Person();
$suci->setNama('Alfiana Suci') ;
echo $suci->getNama() ;
echo "<br>";

$chan = new Person();
$chan->setNama('Park Chanyeol');
echo $chan->getNama() ;