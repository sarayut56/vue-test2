<template>
 
  <div class="container col-md-5" style="min-height: 467px;">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">
    <img id="profile-img" class="rounded mx-auto d-block mb-3" src="../assets/sos.png" />
    <h1 class="h2 mb-3 fw-normal text-center font-monospace fw-bold">ค้นหาคอมพิวเตอร์</h1>
    <form>
      <div class="input-group mb-5">
  <input type="search" class="form-control rounded" placeholder="Search ชื่อคอมพิวเตอร์ เช่น C66100001" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-info"><i class="bi bi-search" style="font-size:25px"></i>  search</button>
</div>
</form>
  <div class="row">
<table class="table table-bordered">
  <thead>
    <tr class="text-center">
      <th scope="col">ลำดับ</th>
      <th scope="col">ชื่อคอมพิวเตอร์</th>
      <th scope="col">แอ็คชัน</th>
    </tr>
  </thead>
  <tbody class="text-center">
    <tr>
      <th scope="row">1</th>
      <td>C66100001</td>
      <td><button type="button" class="btn btn-success"><a href="/com">เลือก</a></button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>C66100002</td>
      <td><button type="button" class="btn btn-success"><a href="/com">เลือก</a></button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>C66100003</td>
      <td><button type="button" class="btn btn-success"><a href="/com">เลือก</a></button></td>
    </tr>
  </tbody>
</table>
</div>
  </div>
 
</template>



